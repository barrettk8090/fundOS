from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import *
from config import api, app, db, secret_key, bcrypt
import json
from datetime import datetime

#Get all Users
class Users_Route(Resource):
    def get(self):
        all_users = User.query.all()
        user_dict =[]
        for user in all_users:
            user_dict.append(user.to_dict())
        return make_response(user_dict, 200)

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

#Get a list of projects that a given user has funded. Add and remove(?) a project to a user's list of funded projects.
class User_Project_By_Id(Resource):
    pass

#Here, int ID will the be the ID of the user. Should it be username?
api.add_resource(User_Project_By_Id, '/user_projects/<int:id>')

#Get all comments for a project. Post a new comment for a project.
class Project_Comments_By_ID(Resource):
    pass

api.add_resource(Project_Comments_By_ID, '/project_comments/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
