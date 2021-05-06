"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Perfil, Post
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




@api.route('/users', methods=['GET'])
@api.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def users(id=None):
    if request.method == 'GET':
        if id is not None:
            user = User.query.get(id)    
            if not user:
                return jsonify({"fail": "User not found"}), 404
            return jsonify({
                "success": "User found",
                "user": user.serialize()
            }), 200
        else:
            users = User.query.all()
            users = list(map(lambda user: user.serialize(), users))
            return jsonify({
                "total": len(users),
                "results": users
            }), 200

    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        user = User.query.get(id)
        if not user: 
            return jsonify({"fail": "user not found"}), 404
        user.delete()
        return jsonify({"success": "user deleted"}), 200



@api.route('/register', methods=['POST'])
def register():
    email = request.json.get('email')
    password = request.json.get('password')
    is_active = request.json.get('is_active', True)

    bio = request.json.get('bio', '')
    linkedin = request.json.get('linkedin', '')
    genero = request.json.get('genero', '')
    github = request.json.get('github', '')


    user = User()
    user.email = email
    user.password = password
    user.is_active = is_active

    perfil = Perfil()
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


@api.route('/posts', methods=['GET'])
@api.route('/posts/<int:id>', methods=['GET', 'POST' 'DELETE'])
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
        post_contenido = request.json.get('post_contenido')
        post_fecha = request.json.get('post_fecha')
        perfiles_id = request.json.get('perfiles_id')

        post = Post()
        post.post_contenido = post_contenido
        post.post_fecha = post_fecha
        post.perfiles_id = perfiles_id
        post.save()

        return jsonify(post.serialize()), 201

    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        post = Post.query.get(id)
        if not post: 
            return jsonify({"fail": "post not found"}), 404
        post.delete()
        return jsonify({"success": "post deleted"}), 200