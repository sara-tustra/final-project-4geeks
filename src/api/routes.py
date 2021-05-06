"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Perfil
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

    

    
