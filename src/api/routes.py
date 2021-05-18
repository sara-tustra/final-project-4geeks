"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import datetime
from flask import Flask, request, jsonify, url_for, Blueprint

from flask_jwt_extended import get_jwt_identity, create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

from api.models import Pregunta_Frecuente, db, User, Perfil, Post, Post_Like, Post_Comentario, Foro, Foro_Comentario, Plantilla_Codigo,Comando_Terminal, Lenguaje, Pregunta_Frecuente, Role, Academia, Area_de_Programacion
from api.utils import generate_sitemap, APIException



api = Blueprint('api', __name__)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


# RUTA PUBLICA
@api.route('/register', methods=['POST']) #OK
def register():
    email = request.json.get('email')
    password = request.json.get('password')
    is_active = request.json.get('is_active', True)
    roles_id = request.json.get('roles_id', 1)

    nombre = request.json.get('nombre', '')
    apellido = request.json.get('apellido', '')
    bio = request.json.get('bio', '')
    linkedin = request.json.get('linkedin', '')
    genero = request.json.get('genero', '')
    github = request.json.get('github', '')

    if not email:
        return jsonify({"fail": "email requerido"}), 400
    if not password:
        return jsonify({"fail": "password es requerida"}), 400

    user = User.query.filter_by(email=email).first()
    if user: return jsonify({"fail": "usuario ya existe"})

    user = User()
    user.email = email
    user.password = generate_password_hash(password)
    user.is_active = is_active
    user.roles_id = roles_id

    perfil = Perfil()
    perfil.nombre = nombre
    perfil.apellido = apellido
    perfil.bio = bio
    perfil.linkedin = linkedin
    perfil.genero = genero
    perfil.github = github

    user.perfil = perfil
    user.save()
    return jsonify({
        "success": "user created",
        "user": user.serialize()
    }), 201

# RUTA PUBLICA
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email:
        return jsonify({"fail": "email requerido"}), 400
    if not password:
        return jsonify({"fail": "password required"}), 400
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"fail": "email o password incorrectos"}), 401
    if not check_password_hash(user.password, password):
        return jsonify({"fail": "email o password incorrectos"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"token": access_token}), 200



# RUTA PRIVADA DE PRUEBA
@api.route('/profile')
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    return jsonify({
        "success": "private route",
        "user": current_user
    }), 200

# RUTA DE ADMINISTRADOR, PRIVADA le falta verificar rol de usuario
@api.route('/users', methods=['GET'])
@api.route('/users/<int:id>', methods=['GET', 'DELETE', 'PUT']) # OK
# @jwt_required()
def users(id=None):
    if request.method == 'GET':
        if id is not None:
            user = User.query.get(id)    
            if not user:
                return jsonify({"fail": "Usuario no encontrado"}), 404
            return jsonify({
                "success": "Usuario encontrado",
                "user": user.serialize_with_profile()
            }), 200
        else:
            users = User.query.all()
            users = list(map(lambda user: user.serialize_with_profile(), users))
            return jsonify({
                "total": len(users),
                "results": users
            }), 200
    
    if request.method == 'PUT':
        perfil = Perfil.query.get(id)
        if not perfil:
            return jsonify({"fail": "Usuario no encontrado"}), 404
        else:
            nombre = request.json.get('nombre')
            apellido = request.json.get('apellido', '')
            bio = request.json.get('bio', '')
            linkedin = request.json.get('linkedin', '')
            genero = request.json.get('genero', '')
            github = request.json.get('github', '')

            perfil.nombre = nombre if nombre else perfil.nombre
            perfil.apellido = apellido if apellido else perfil.apellido
            perfil.bio = bio if bio else perfil.apellido
            perfil.linkedin = linkedin if linkedin else perfil.linkedin
            perfil.genero = genero if genero else perfil.genero
            perfil.github = github if github else perfil.github
            perfil.update()
        
        return jsonify({
            'success': 'Perfil actualizado',
            'perfil': perfil.serialize()
            }), 200

    if request.method == 'DELETE':
        user = User.query.get(id)
        if not user: 
            return jsonify({"fail": "Usuario no encontrado"}), 404
        user.delete()
        return jsonify({"success": "Usuario borrado"}), 200


# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/posts', methods=['GET', 'POST']) 
@api.route('/posts/<int:id>', methods=['GET', 'DELETE'])
@jwt_required(optional=True) 
def posts(id=None):
    if request.method == 'GET':
        if id is not None:
            post = Post.query.get(id)    
            if not post:
                return jsonify({"fail": "Post not found"}), 404
            return jsonify({
                "success": "Post found",
                "user": post.serialize()
            }), 200
        else:
            posts = Post.query.all()
            posts = list(map(lambda post: post.serialize(), posts))
            return jsonify({
                "total": len(posts),
                "results": posts
            }), 200

    if request.method =='POST':
        current_user = get_jwt_identity()
        date = datetime.now()
        post_contenido = request.json.get('post_contenido')
        post_fecha = str(date)
        perfiles_id = request.json.get('perfiles_id')

        user = User.query.filter_by(email=current_user).first()
        if user.id != perfiles_id:
            return jsonify({"fail": "usuario no autorizado"})
        post = Post()
        post.post_contenido = post_contenido
        post.post_fecha = post_fecha
        post.perfiles_id = perfiles_id
        post.save()

        return jsonify(post.serialize()), 201
        
    if request.method == 'DELETE':
        post = Post.query.get(id)
        if not post: 
            return jsonify({"fail": "post not found"}), 404
        post.delete()
        return jsonify({"success": "post deleted"}), 200

# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/post_comments', methods=['GET', 'POST', 'DELETE'])
@api.route('/post_comments/<int:comment_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required(optional=True) 
def post_comentario(comment_id=None):
    if request.method =='GET':
        comentario = Post_Comentario.query.get(comment_id)
        if comment_id is not None:
            if not comentario:
                return jsonify({"fail": "Comentario no encontrado"}), 404
            return jsonify({
                "success": "Comentario encontrado",
                "comentario": comentario.serialize()
            })
        else:
            comentarios = Post_Comentario.query.all()
            comentarios = list(map(lambda comentario: comentario.serialize(), comentarios))
            return jsonify({
                "total": len(comentarios),
                "results": comentarios
            }), 200
         

    if request.method =='POST':
        current_user = get_jwt_identity()
        date = datetime.now()
        comentario_fecha = str(date)
        comentario_contenido=request.json.get('comentario_contenido')
        perfiles_id = request.json.get('perfiles_id')
        posts_id = request.json.get('posts_id')

        user = User.query.filter_by(email=current_user).first()
        if user.id != perfiles_id:
            return jsonify({"fail": "usuario no autorizado"})

        post_comentario = Post_Comentario()
        post_comentario.comentario_fecha = comentario_fecha
        post_comentario.comentario_contenido = comentario_contenido
        post_comentario.perfiles_id = perfiles_id
        post_comentario.posts_id = posts_id
        post_comentario.save()
        return jsonify({
            "success": "Comentario enviado",
            "post_comentarios": post_comentario.serialize()
        }), 201

    if request.method == 'DELETE':
        post_comentario = Post_Comentario.query.get(id)
        if not post_comentario: 
            return jsonify({"fail": "Comentario no encontrado"}), 404
        post_comentario.delete()
        return jsonify({"success": "Comentario eliminado"}), 200

# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/post_likes', methods=['POST', 'DELETE'])
@api.route('/post_likes/<int:post_likes_id>', methods=['DELETE'])
@jwt_required(optional=True) 
def post_like(post_likes_id=None):
    if request.method =='POST':
        current_user = get_jwt_identity()
        posts_id = request.json.get('posts_id')
        perfiles_id = request.json.get('perfiles_id')

        user = User.query.filter_by(email=current_user).first()
        if user.id != perfiles_id:
            return jsonify({"fail": "usuario no autorizado"})
        post_like = Post_Like()
        post_like.perfiles_id = perfiles_id
        post_like.posts_id = posts_id
        post_like.save()
        return jsonify({
            "success": "Diste like!",
            "post_like": post_like.serialize()
        }), 201

    if request.method == 'DELETE':
        post_like = Post_Like.query.get(post_likes_id)
        if not post_like: 
            return jsonify({"fail": "Like no encontrado"}), 404
        post_like.delete()
        return jsonify({"success": "Like eliminado"}), 200


# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/foros', methods=['GET', 'POST']) #OK
@api.route('/foros/<int:id>', methods=['GET', 'DELETE']) #OK
@jwt_required(optional=True) 
def foros(id=None):
    if request.method == 'GET':
        if id is not None:
            foro = Foro.query.get(id)    
            if not foro:
                return jsonify({"fail": "Foro no encontrado"}), 404
            return jsonify({
                "success": "Foro encontrado",
                "foro": foro.serialize()
            }), 200
        else:
            foros = Foro.query.all()
            foros = list(map(lambda foro: foro.serialize(), foros))
            return jsonify({
                "total": len(foros),
                "results": foros
            }), 200

    if request.method =='POST':
        current_user = get_jwt_identity()
        date = datetime.now()
        foro_nombre = request.json.get('foro_nombre')
        foro_contenido = request.json.get('foro_contenido')
        foro_fecha = str(date)
        perfiles_id = request.json.get('perfiles_id')

        user = User.query.filter_by(email=current_user).first()
        if user.id != perfiles_id:
            return jsonify({"fail": "usuario no autorizado"})

        foro = Foro()
        foro.foro_nombre = foro_nombre
        foro.foro_contenido = foro_contenido
        foro.foro_fecha = foro_fecha
        foro.perfiles_id = perfiles_id
        foro.save()

        return jsonify(foro.serialize()), 201
        
    if request.method == 'DELETE':
        foro = Foro.query.get(id)
        if not foro: 
            return jsonify({"fail": "foro no encontrado"}), 404
        foro.delete()
        return jsonify({"success": "foro eliminado"}), 200

# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/foro_comments', methods=['GET', 'POST', 'DELETE'])
@api.route('/foro_comments/<int:comment_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required(optional=True) 
def foro_comentario(comment_id=None):
    if request.method =='GET':
        foro_comentario = Foro_Comentario.query.get(comment_id)
        if comment_id is not None:
            if not foro_comentario:
                return jsonify({"fail": "Comentario no encontrado"}), 404
            return jsonify({
                "success": "Comentario encontrado",
                "comentario": foro_comentario.serialize()
            })
        else:
            foro_comentarios = Foro_Comentario.query.all()
            foro_comentarios = list(map(lambda foro_comentario: foro_comentario.serialize(), foro_comentarios))
            return jsonify({
                "total": len(foro_comentarios),
                "results": foro_comentarios
            }), 200
    
    if request.method =='POST':
        current_user = get_jwt_identity()
        date = datetime.now()
        foro_comentario_fecha = str(date)
        foro_comentario_contenido=request.json.get('foro_comentario_contenido')
        perfiles_id = request.json.get('perfiles_id')
        foros_id = request.json.get('foros_id')

        user = User.query.filter_by(email=current_user).first()
        if user.id != perfiles_id:
            return jsonify({"fail": "usuario no autorizado"})

        foro_comentario = Foro_Comentario()
        foro_comentario.comentario_fecha = foro_comentario_fecha
        foro_comentario.comentario_contenido = foro_comentario_contenido
        foro_comentario.perfiles_id = perfiles_id
        foro_comentario.foros_id = foros_id
        foro_comentario.save()
        return jsonify({
            "success": "Comentario de foro enviado",
            "foro_comentario": foro_comentario.serialize()
        }), 201

    if request.method == 'DELETE':
        foro_comentario = Foro_Comentario.query.get(id)
        if not foro_comentario: 
            return jsonify({"fail": "Comentario de foro no encontrado"}), 404
        foro_comentario.delete()
        return jsonify({"success": "Comentario de foro eliminado"}), 200


# RUTA PRIVADA
@api.route('/plantilla_codigo', methods=['GET', 'POST', 'DELETE'])
@api.route('/plantilla_codigo/<int:plantilla_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required()
def plantilla_de_codigo(plantilla_id=None):
    current_user = get_jwt_identity()
    if request.method =='GET':
        plantilla_codigo = Plantilla_Codigo.query.get(plantilla_id)
        if plantilla_id is not None:
            if not plantilla_codigo:
                return jsonify({"fail": "Plantilla no encontrada"}), 404
            return jsonify({
                "success": "Plantilla encontrada",
                "plantilla_codigo": plantilla_codigo.serialize()
            })
        else:
            plantillas_codigo = Plantilla_Codigo.query.all()
            plantillas_codigo = list(map(lambda plantilla_codigo: plantilla_codigo.serialize(), plantillas_codigo))
            return jsonify({
                "total": len(plantillas_codigo),
                "results": plantillas_codigo
            }), 200
    
    if request.method =='POST':
        date = datetime.now()
        plantilla_fecha = str(date)
        plantilla_nombre=request.json.get('plantilla_nombre')
        plantilla_contenido = request.json.get('plantilla_contenido')
        perfiles_id = request.json.get('perfiles_id')

        

        plantilla_codigo = Plantilla_Codigo()
        plantilla_codigo.plantilla_fecha = plantilla_fecha
        plantilla_codigo.plantilla_contenido = plantilla_contenido
        plantilla_codigo.plantilla_nombre = plantilla_nombre
        plantilla_codigo.perfiles_id = perfiles_id
        plantilla_codigo.save()
        return jsonify({
            "success": "Plantilla guardada",
            "plantilla_codigo": plantilla_codigo.serialize()
        }), 201

    if request.method == 'DELETE':
        plantilla_codigo = Plantilla_Codigo.query.get(id)
        if not plantilla_codigo: 
            return jsonify({"fail": "Plantilla no encontrada"}), 404
        plantilla_codigo.delete()
        return jsonify({"success": "Plantilla eliminada"}), 200

# RUTA PRIVADA
@api.route('/comandos_terminal', methods=['GET', 'POST', 'DELETE'])
@api.route('/comandos_terminal/<int:comando_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required() 
def comandos_de_terminal(comando_id=None):
    if request.method =='GET':
        comando_terminal = Comando_Terminal.query.get(comando_id)
        if comando_id is not None:
            if not comando_terminal:
                return jsonify({"fail": "Comando no encontrado"}), 404
            return jsonify({
                "success": "Comando encontrado",
                "comando_terminal": comando_terminal.serialize()
            })
        else:
            comandos_terminal = Comando_Terminal.query.all()
            comandos_terminal = list(map(lambda comando_terminal: comando_terminal.serialize(), comandos_terminal))
            return jsonify({
                "total": len(comandos_terminal),
                "results": comandos_terminal
            }), 200
    
    if request.method =='POST':
        date = datetime.now()
        comando_fecha = str(date)
        comando_nombre=request.json.get('comando_nombre')
        comando_contenido = request.json.get('comando_contenido')
        perfiles_id = request.json.get('perfiles_id')

        comando_terminal = Comando_Terminal()
        comando_terminal.comando_fecha = comando_fecha
        comando_terminal.comando_contenido = comando_contenido
        comando_terminal.comando_nombre = comando_nombre
        comando_terminal.perfiles_id = perfiles_id
        comando_terminal.save()
        return jsonify({
            "success": "Comando guardado",
            "comando_terminal": comando_terminal.serialize()
        }), 201

    if request.method == 'DELETE':
        comando_terminal = Comando_Terminal.query.get(id)
        if not comando_terminal: 
            return jsonify({"fail": "Comando no encontrado"}), 404
        comando_terminal.delete()
        return jsonify({"success": "Comando eliminado"}), 200          


# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/lenguajes', methods=['GET', 'POST', 'DELETE'])
@api.route('/lenguajes/<int:lenguaje_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required(optional=True)
def lenguajes(lenguaje_id=None):
    if request.method =='GET':
        lenguaje = Lenguaje.query.get(lenguaje_id)
        if lenguaje_id is not None:
            if not lenguaje:
                return jsonify({"fail": "Lenguaje no encontrado"}), 404
            return jsonify({
                "success": "Lenguaje encontrado",
                "lenguaje": lenguaje.serialize()
            })
        else:
            lenguajes = Lenguaje.query.all()
            lenguajes = list(map(lambda lenguaje: lenguaje.serialize(), lenguajes))
            return jsonify({
                "total": len(lenguajes),
                "results": lenguajes
            }), 200
    
    if request.method =='POST':
        # current_user = get_jwt_identity()      
        lenguaje_nombre=request.json.get('lenguaje_nombre')
        lenguaje_descripcion = request.json.get('lenguaje_descripcion')
        imagen = request.json.get('imagen')
        perfiles_id = request.json.get('perfiles_id', '')

        # user = User.query.filter_by(email=current_user).first()
        # if user.id != perfiles_id:
        #     return jsonify({"fail": "usuario no autorizado"})

        lenguaje = Lenguaje()
        lenguaje.lenguaje_descripcion = lenguaje_descripcion
        lenguaje.lenguaje_nombre = lenguaje_nombre
        lenguaje.imagen = imagen
        lenguaje.perfiles_id = perfiles_id
        lenguaje.save()
        return jsonify({
            "success": "Lenguaje guardado",
            "lenguaje": lenguaje.serialize()
        }), 201

    if request.method == 'DELETE':
        lenguaje = Lenguaje.query.get(id)
        if not lenguaje: 
            return jsonify({"fail": "Lenguaje no encontrado"}), 404
        lenguaje.delete()
        return jsonify({"success": "Lenguaje eliminado"}), 200


# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/preguntas_frecuentes', methods=['GET', 'POST', 'DELETE'])
@api.route('/preguntas_frecuentes/<int:pregunta_id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required(optional=True)
def preguntas_frecuentes(pregunta_id=None):
    if request.method =='GET':
        pregunta_frecuente = Pregunta_Frecuente.query.get(pregunta_id)
        if pregunta_id is not None:
            if not pregunta_frecuente:
                return jsonify({"fail": "Pregunta Frecuente no encontrada"}), 404
            return jsonify({
                "success": "Pregunta Frecuente encontrada",
                "pregunta_frecuente": pregunta_frecuente.serialize()
            })
        else:
            preguntas = Pregunta_Frecuente.query.all()
            preguntas = list(map(lambda pregunta: pregunta.serialize(), preguntas))
            return jsonify({
                "total": len(preguntas),
                "results": preguntas
            }), 200
    
    if request.method =='POST':    
        pregunta=request.json.get('pregunta')
        respuesta = request.json.get('respuesta')
      
        pregunta_frecuente = Pregunta_Frecuente()
        pregunta_frecuente.pregunta = pregunta
        pregunta_frecuente.respuesta = respuesta
        pregunta_frecuente.save()
        return jsonify({
            "success": "Pregunta Frecuente guardada",
            "pregunta_frecuente": pregunta_frecuente.serialize()
        }), 201

    if request.method == 'DELETE':
        pregunta_frecuente = Pregunta_Frecuente.query.get(id)
        if not pregunta_frecuente: 
            return jsonify({"fail": "Pregunta Frecuente no encontrada"}), 404
        pregunta_frecuente.delete()
        return jsonify({"success": "Pregunta Frecuente eliminada"}), 200

# RUTA PRIVADA
@api.route('/roles', methods=['GET', 'POST', 'DELETE'])
@api.route('/roles/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def roles(id=None):
    if request.method =='GET':
        rol = Role.query.get(id)
        if id is not None:
            if not rol:
                return jsonify({"fail": "Rol no encontrado"}), 404
            return jsonify({
                "success": "Rol encontrado",
                "rol": rol.serialize()
            })
        else:
            roles = Role.query.all()
            roles = list(map(lambda rol: rol.serialize(), roles))
            return jsonify({
                "total": len(roles),
                "results": roles
            }), 200
    
    if request.method =='POST':
        nombre=request.json.get('nombre')     
        rol = Role()
        rol.nombre = nombre
        rol.save()
        return jsonify({
            "success": "Rol guardado",
            "rol": rol.serialize()
        }), 201

    if request.method == 'DELETE':
        rol = Role.query.get(id)
        if not rol: 
            return jsonify({"fail": "Rol no encontrado"}), 404
        rol.delete()
        return jsonify({"success": "Rol eliminado"}), 200

# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/academias', methods=['GET', 'POST', 'DELETE'])
@api.route('/academias/<int:id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required(optional=True)
def academias(id=None):
    if request.method =='GET':
        academia = Academia.query.get(id)
        if id is not None:
            if not academia:
                return jsonify({"fail": "Academia no encontrada"}), 404
            return jsonify({
                "success": "Academia encontrada",
                "academia": academia.serialize()
            })
        else:
            academias = Academia.query.all()
            academias = list(map(lambda academia: academia.serialize(), academias))
            return jsonify({
                "total": len(academias),
                "results": academias
            }), 200
    
    if request.method =='POST':
        nombre=request.json.get('nombre')
        descripcion = request.json.get('descripcion')
        imagen = request.json.get('imagen')
      
        academia = Academia()
        academia.nombre = nombre
        academia.descripcion = descripcion
        academia.imagen = imagen
        
        academia.save()
        return jsonify({
            "success": "Academia guardada",
            "academia": academia.serialize()
        }), 201

    if request.method == 'DELETE':
        academia = Academia.query.get(id)
        if not academia: 
            return jsonify({"fail": "Academia no encontrada"}), 404
        academia.delete()
        return jsonify({"success": "Academia eliminada"}), 200

# GET ES PUBLICA PERO POST Y DELETE ES PRIVADA
@api.route('/areas_de_programacion', methods=['GET', 'POST', 'DELETE'])
@api.route('/areas_de_programacion/<int:id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required(optional=True)
def areas_de_programacion(id=None):
    if request.method =='GET':
        area_de_programacion = Area_de_Programacion.query.get(id)
        if id is not None:
            if not area_de_programacion:
                return jsonify({"fail": "Area de programacion no encontrada"}), 404
            return jsonify({
                "success": "Area de programacion encontrada",
                "area_de_programacion": area_de_programacion.serialize()
            })
        else:
            areas_de_programacion = Area_de_Programacion.query.all()
            areas_de_programacion = list(map(lambda area_de_programacion: area_de_programacion.serialize(), areas_de_programacion))
            return jsonify({
                "total": len(areas_de_programacion),
                "results": areas_de_programacion
            }), 200
    
    if request.method =='POST':    
        nombre=request.json.get('nombre')
        descripcion = request.json.get('descripcion')
        imagen = request.json.get('imagen')
      
        area_de_programacion = Area_de_Programacion()
        area_de_programacion.nombre = nombre
        area_de_programacion.descripcion = descripcion
        area_de_programacion.imagen = imagen
        area_de_programacion.save()
        return jsonify({
            "success": "Area de Programacion guardada",
            "area_de_programacion": area_de_programacion.serialize()
        }), 201

    if request.method == 'DELETE':
        area_de_programacion = Area_de_Programacion.query.get(id)
        if not area_de_programacion: 
            return jsonify({"fail": "Area de Programacion no encontrada"}), 404
        area_de_programacion.delete()
        return jsonify({"success": "Area de Programacion eliminada"}), 200

