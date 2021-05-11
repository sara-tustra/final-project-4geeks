from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    perfil = db.relationship('Perfil', cascade='all, delete', backref='user', uselist=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
        }

    def serialize_with_profile(self):
        return {
            "id": self.id,
            "email": self.email,
            "perfil": self.perfil.serialize_profile_with_posts()
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    

class Perfil(db.Model):
    __tablename__ = 'perfiles'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200), nullable=False)
    apellido = db.Column(db.String(200))
    bio = db.Column(db.String(600), default="")
    linkedin = db.Column(db.String(150), default="")
    genero = db.Column(db.String(600), default="")
    github = db.Column(db.String(600), default="")
    users_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    plantillas_codigo = db.relationship('Plantilla_Codigo', cascade='all, delete', backref='perfil')
    comandos_terminal = db.relationship('Comando_Terminal', cascade='all, delete', backref='perfil')
    foros = db.relationship('Foro', cascade='all, delete', backref='perfil')
    posts = db.relationship('Post', cascade='all, delete', backref='perfil')
    post_likes = db.relationship('Post_Like', cascade='all, delete', backref='perfil')
    post_comentarios = db.relationship('Post_Comentario', cascade='all, delete', backref='perfil')
    foro_comentarios = db.relationship('Foro_Comentario', cascade='all, delete', backref='perfil')
    lenguajes = db.relationship('Lenguaje', cascade='all, delete', backref='perfil')
    #contactos = db.relationship('Contacto', secondary='contactos', foreign_keys='[Contacto.user_a_id]')

    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def serialize(self):
        return {
            "nombre": self.nombre,
            "apellido": self.apellido,
            "bio": self.bio,
            "linkedin": self.linkedin,
            "genero": self.genero,
            "github": self.github
        }
    
    def serialize_profile_with_posts(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "bio": self.bio,
            "linkedin": self.linkedin,
            "genero": self.genero,
            "github": self.github,
            "posts": self.get_posts()
        }

    def get_posts(self):
        return list(map(lambda post: post.serialize(), self.posts))



class Contacto(db.Model):
    __tablename__ ='contactos'
    user_origen_id = db.Column(db.Integer, db.ForeignKey('perfiles.id'), primary_key=True)
    user_destino_id = db.Column(db.Integer, db.ForeignKey('perfiles.id'), primary_key=True)

    user_origen = db.relationship("Perfil", foreign_keys=[user_origen_id])
    user_destino = db.relationship("Perfil", foreign_keys=[user_destino_id])
    

class Post(db.Model):
    __tablename__ ='posts'
    id = db.Column(db.Integer, primary_key=True)
    post_contenido = db.Column(db.String(900), nullable=False)
    post_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)
    post_likes = db.relationship('Post_Like', cascade="all, delete", backref='post')
    post_comentarios = db.relationship('Post_Comentario', cascade='all, delete', backref='post')


    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def serialize(self):
        return{
            "id": self.id,
            "post_contenido": self.post_contenido,
            "post_fecha": self.post_fecha,
            "post_likes": self.get_post_likes(),
            "post_comentarios": self.get_post_comentarios(),
            "perfiles_id": self.perfiles_id
        }

    def get_post_likes(self):
        return len(self.post_likes)

    def get_post_comentarios(self):
        return list(map(lambda post_comentario: post_comentario.serialize(), self.post_comentarios))


class Post_Like(db.Model):
    __tablename__ ='post_likes'
    id = db.Column(db.Integer, primary_key=True)
    posts_id = db.Column(db.Integer, db.ForeignKey('posts.id', ondelete='CASCADE'), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)


    def serialize(self):
        return {
            "posts_id": self.posts_id,
            "perfil_id": self.perfiles_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    

class Post_Comentario(db.Model):
    __tablename__ = 'post_comentarios'
    id = db.Column(db.Integer, primary_key=True)
    comentario_fecha = db.Column(db.String(20), nullable=False)
    comentario_contenido = db.Column(db.String(900), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)
    posts_id = db.Column(db.Integer, db.ForeignKey('posts.id', ondelete='CASCADE'), nullable=False)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def serialize(self):
        return{
            "comentario_id": self.id,
            "comentario_fecha": self.comentario_fecha,
            "comentario_contenido": self.comentario_contenido,
            "post_id": self.posts_id,
            "perfiles_id": self.perfiles_id
        }



class Foro(db.Model):
    __tablename__ ='foros'
    id = db.Column(db.Integer, primary_key=True)
    foro_nombre = db.Column(db.String(500), nullable=False)
    foro_contenido = db.Column(db.String(900), nullable=False)
    foro_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)
    foro_comentarios = db.relationship('Foro_Comentario', cascade='all, delete', backref='foro')


    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def serialize(self):
        return{
            "id": self.id,
            "foro_nombre": self.foro_nombre,
            "foro_contenido": self.foro_contenido,
            "foro_fecha": self.foro_fecha,
            "perfiles_id": self.perfiles_id,
            "foro_comentarios": self.get_foro_comentarios()
        }
        
    def get_foro_comentarios(self):
        return list(map(lambda foro_comentario: foro_comentario.serialize(), self.foro_comentarios))



class Foro_Comentario(db.Model):
    __tablename__= 'foro_comentarios'
    id = db.Column(db.Integer, primary_key=True)
    comentario_fecha = db.Column(db.String(20), nullable=False)
    comentario_contenido = db.Column(db.String(900), nullable=False)
    foros_id = db.Column(db.Integer, db.ForeignKey('foros.id', ondelete='CASCADE'), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def serialize(self):
        return{
            "foro_comentario_id": self.id,
            "foro_comentario_fecha": self.comentario_fecha,
            "foro_comentario_contenido": self.comentario_contenido,
            "foro_id": self.foros_id,
            "perfiles_id": self.perfiles_id
        }
    



class Plantilla_Codigo(db.Model):
    __tablename__='plantillas_codigo'
    id = db.Column(db.Integer, primary_key=True)
    plantilla_nombre = db.Column(db.String(500), nullable=False)
    plantilla_contenido = db.Column(db.String(900), nullable=False)
    plantilla_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)


    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def serialize(self):
        return{
            "id": self.id,
            "plantilla_nombre": self.plantilla_nombre,
            "plantilla_contenido": self.plantilla_contenido,
            "plantilla_fecha": self.plantilla_fecha,
            "perfil_id": self.perfiles_id
        }


class Comando_Terminal(db.Model):
    __tablename__='comandos_terminal'
    id = db.Column(db.Integer, primary_key=True)
    comando_nombre = db.Column(db.String(500), nullable=False)
    comando_contenido = db.Column(db.String(900), nullable=False)
    comando_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)


    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def serialize(self):
        return{
            "id": self.id,
            "plantilla_nombre": self.plantilla_nombre,
            "plantilla_contenido": self.plantilla_contenido,
            "plantilla_fecha": self.plantilla_fecha,
            "perfil_id": self.perfiles_id
        }

class Lenguaje(db.Model):
    __tablename__ ='lenguajes'
    id = db.Column(db.Integer, primary_key=True)
    lenguaje_nombre = db.Column(db.String(500), nullable=False)
    lenguaje_descripcion = db.Column(db.String(900), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "lenguaje_nombre": self.lenguaje_nombre,
            "lenguaje_descripcion": self.lenguaje_descripcion,
            "perfil_id": self.perfiles_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()


