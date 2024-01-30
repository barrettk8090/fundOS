from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import User, Workout, Set, Set_Workout
from config import api, app, db, secret_key, bcrypt
import json
from datetime import datetime

#Get all Users
class Users_Route(Resource):
    pass

api.add_resource(Users_Route, '/users')

#Post a new user and patch an existing user
class User_By_Id(Resource):
    pass

api.add_resource(User_By_Id, '/users/<int:id>')

#Get all Projects
class Projects(Resource):
    pass

api.add_resource(Projects, '/projects')

#Post a new project, patch an existing project, and delete a project 
class Project_By_Id(Resource):
    pass

api.add_resource(Project_By_Id, '/projects/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
