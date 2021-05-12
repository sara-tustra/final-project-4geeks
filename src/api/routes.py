"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Perfil, Post, Post_Like, Post_Comentario, Foro, Foro_Comentario, Plantilla_Codigo,Comando_Terminal, Lenguaje
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/rutadeprueba', methods=['POST', 'GET'])
def prueba():

    response_body = {
        "message": "Wenas desde el proyecto final"
    }

    return jsonify(response_body), 200



# AGREGAR FOROS AL SERIALIZE DE USUARIO
@api.route('/users', methods=['GET'])
@api.route('/users/<int:id>', methods=['GET', 'DELETE', 'PUT']) # OK
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



@api.route('/register', methods=['POST']) #OK
def register():
    email = request.json.get('email')
    password = request.json.get('password')
    is_active = request.json.get('is_active', True)

    nombre = request.json.get('nombre', '')
    apellido = request.json.get('apellido', '')
    bio = request.json.get('bio', '')
    linkedin = request.json.get('linkedin', '')
    genero = request.json.get('genero', '')
    github = request.json.get('github', '')


    user = User()
    user.email = email
    user.password = password
    user.is_active = is_active

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


@api.route('/posts', methods=['GET', 'POST']) #OK
@api.route('/posts/<int:id>', methods=['GET', 'DELETE']) #OK
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
        date = datetime.now()
        post_contenido = request.json.get('post_contenido')
        post_fecha = str(date)
        perfiles_id = request.json.get('perfiles_id')

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

## OJO, SEPARAR RUTAS PARA QUE USUARIO QUE CREÓ EL COMENTARIO PUEDA HACER MODIFICACIONES O BORRAR
@api.route('/post_comments', methods=['GET', 'POST', 'DELETE'])
@api.route('/post_comments/<int:comment_id>', methods=['GET', 'PUT', 'DELETE'])
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
        date = datetime.now()
        comentario_fecha = str(date)
        comentario_contenido=request.json.get('comentario_contenido')
        perfiles_id = request.json.get('perfiles_id')
        posts_id = request.json.get('posts_id')

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


@api.route('/post_likes', methods=['POST', 'DELETE'])
@api.route('/post_likes/<int:post_likes_id>', methods=['DELETE'])
def post_like(post_likes_id=None):
    if request.method =='POST':
        posts_id = request.json.get('posts_id')
        perfiles_id = request.json.get('perfiles_id')

        post_like = Post_Like()
        post_like.perfiles_id = perfiles_id
        post_like.posts_id = posts_id
        post_like.save()
        return jsonify({
            "success": "Diste like!",
            "post_like": post_like.serialize()
        }), 201

    if request.method == 'DELETE':
        post_like = Post_Like.query.get(id)
        if not post_like: 
            return jsonify({"fail": "Like no encontrado"}), 404
        post_like.delete()
        return jsonify({"success": "Like eliminado"}), 200


@api.route('/foros', methods=['GET', 'POST']) #OK
@api.route('/foros/<int:id>', methods=['GET', 'DELETE']) #OK
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
        date = datetime.now()
        foro_nombre = request.json.get('foro_nombre')
        foro_contenido = request.json.get('foro_contenido')
        foro_fecha = str(date)
        perfiles_id = request.json.get('perfiles_id')

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
        post.delete()
        return jsonify({"success": "foro eliminado"}), 200


@api.route('/foro_comments', methods=['GET', 'POST', 'DELETE'])
@api.route('/foro_comments/<int:comment_id>', methods=['GET', 'PUT', 'DELETE'])
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
        date = datetime.now()
        foro_comentario_fecha = str(date)
        foro_comentario_contenido=request.json.get('foro_comentario_contenido')
        perfiles_id = request.json.get('perfiles_id')
        foros_id = request.json.get('foros_id')

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





@api.route('/plantilla_codigo', methods=['GET', 'POST', 'DELETE'])
@api.route('/plantilla_codigo/<int:plantilla_id>', methods=['GET', 'PUT', 'DELETE'])
def plantilla_de_codigo(plantilla_id=None):
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


@api.route('/comandos_terminal', methods=['GET', 'POST', 'DELETE'])
@api.route('/comandos_terminal/<int:comando_id>', methods=['GET', 'PUT', 'DELETE'])
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




@api.route('/lenguajes', methods=['GET', 'POST', 'DELETE'])
@api.route('/lenguajes/<int:lenguaje_id>', methods=['GET', 'PUT', 'DELETE'])
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
      
        lenguaje_nombre=request.json.get('lenguaje_nombre')
        lenguaje_descripcion = request.json.get('lenguaje_descripcion')
        perfiles_id = request.json.get('perfiles_id')

        lenguaje = Lenguaje()
        lenguaje.lenguaje_descripcion = lenguaje_descripcion
        lenguaje.lenguaje_nombre = lenguaje_nombre
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



@api.route('/contactos', methods=['POST'])
def contactos(user_id=None):
   user_origen_id = request.json.get('user_origin_id')
   user_destino_id = request.json.get('user_destino_id')

   contacto = Contacto()
   contacto.user_origen_id = user_origen_id
   contacto.user_destino_id = user_destino_id

   contacto.save()
   return jsonify({
       "success": "contacto guardado",
       "contacto": contacto.serialize()
   }), 201