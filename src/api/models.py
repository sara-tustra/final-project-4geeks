from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    profile = db.relationship('Perfil', cascade='all, delete', backref='user', uselist=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
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
    bio = db.Column(db.String(600), default="")
    linkedin = db.Column(db.String(150), default="")
    fecha_nacimiento = db.Column(db.String(600), default="")
    genero = db.Column(db.String(600), default="")
    github = db.Column(db.String(600), default="")
    users_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    posts = db.relationship('Post', cascade='all, delete',
    backref='perfil')
    foros = db.relationship('Foro', cascade='all, delete',
    backfef='perfil')
    plantillas_codigo = db.relationship('Plantilla_Codigo', cascade='all, delete',
    backref='perfil')
    comandos_terminal = db.relationship('Comando_Terminal', cascade='all, delete',
    backref='perfil')
    
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
            "id": self.id,
            "bio": self.bio,
            "linkedin": self.linkedin,
            "fecha_nacimiento": self.fecha_nacimiento,
            "genero": self.genero,
            "github": self.github
        }


class Post(db.Model):
    __tablename__='posts'
    id = db.Column(db.Integer, primary_key=True)
    post_contenido = db.Column(db.String(900), nullable=False)
    post_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE', nullable=False))


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
            "post_fecha": self.post_fecha
        }



class Foro(db.Model):
    __tablename__='foros'
    id = db.Column(db.Integer, primary_key=True)
    foro_nombre = db.Column(db.String(500), nullable=False)
    foro_contenido = db.Column(db.String(900), nullable=False)
    foro_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE', nullable=False))


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
            "foro_fecha": self.foro_fecha
        }
    
class Plantilla_Codigo(db.Model):
    __tablename__='plantillas_codigo'
    id = db.Column(db.Integer, primary_key=True)
    plantilla_nombre = db.Column(db.String(500), nullable=False)
    plantilla_contenido = db.Column(db.String(900), nullable=False)
    plantilla_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE', nullable=False))


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
            "plantilla_fecha": self.plantilla_fecha
        }


class Comando_Terminal(db.Model):
    __tablename__='comandos_terminal'
    id = db.Column(db.Integer, primary_key=True)
    comando_nombre = db.Column(db.String(500), nullable=False)
    comando_contenido = db.Column(db.String(900), nullable=False)
    comando_fecha = db.Column(db.String(20), nullable=False)
    perfiles_id = db.Column(db.Integer, db.ForeignKey('perfiles.id', ondelete='CASCADE', nullable=False))


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
            "plantilla_fecha": self.plantilla_fecha
        }