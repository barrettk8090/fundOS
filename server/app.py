from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import *
from config import api, app, db, secret_key, bcrypt
import json
from datetime import datetime

#Get all users and create a new user
class Users_Route(Resource):
    def get(self):
        all_users = User.query.all()
        user_dict =[]
        for user in all_users:
            user_dict.append(user.to_dict())
        return make_response(user_dict, 200)
    def post(self):
        try:
            data = request.get_json()
            new_user = User(username=data['username'], password=data['password'], email=data['email'], first_name=data['first_name'], last_name=data['last_name'], image=data['image'], wallet_address=data['wallet_address'])
            db.session.add(new_user)
            db.session.commit()
            return make_response(new_user.to_dict(), 201)
        except:
            return make_response("Invalid request", 400)

api.add_resource(Users_Route, '/users')

#Post a new user and patch an existing user
class User_By_Id(Resource):
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        return make_response(user.to_dict(), 200)
    def patch(self, id): #Need to add validation, user cannot update all fields
        current_user = User.query.filter(User.id == id).first()
        if current_user:
            try:
                data = request.get_json()
                for attr in data:
                    setattr(current_user, attr, data[attr])
                db.session.add(current_user)
                db.session.commit()
                return make_response(current_user.to_dict(), 202)
            except:
                return make_response({"errors": ["Invalid input - validation"]}, 400)
        else:
            return make_response({"error": ["User not found"]}, 404)

api.add_resource(User_By_Id, '/users/<int:id>')

#Get all Projects 
class Projects_Route(Resource):
    def get(self):
        all_projects = Project.query.all()
        project_dict =[]
        for project in all_projects:
            project_dict.append(project.to_dict()) #Need to add serialization rules here
        return make_response(project_dict, 200)

#Create a new project based on a users ID
class Projects_By_User(Resource):
    pass
    # def post(self):
    #     try:
    #         data = request.get_json()
    #         new_project = Project(name=data['name'], type=data['type'], image=data['image'], description=data['description'], funding_needed=data['funding_needed'], current_funding=data['current_funding'], deadline=datetime.strptime(data['deadline'], '%Y-%m-%d'), user_id=data['user_id'], status=data['status'])
    #         db.session.add(new_project)
    #         db.session.commit()
    #         return make_response(new_project.to_dict(), 201)
    #     except:
    #         return make_response("Invalid request", 400)

api.add_resource(Projects_Route, '/projects')

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
