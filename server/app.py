from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import *
from config import api, app, db, secret_key, bcrypt
import json
from datetime import datetime


#####REWRITE IN RESTFUL#####

@app.route('/login', methods=['POST'])
def login():
    if request.method == "POST":
        data = request.get_json()
        gotten_user = User.query.filter(User.username == data['username']).first()
        if gotten_user:
            if gotten_user.authenticate(data['password']):
                session["user"] = gotten_user.id
                return gotten_user.to_dict(),200
            else:
                return {"Error": "Not valid password"}, 400
        else:
            return {"Error": "Not valid username"}, 400

@app.route('/session')
def check_session():
    print(session)
    if session.get('user'):
        user = User.query.filter(User.id == session["user"]).first()
        return user.to_dict()
    else:
        return {"session": "user not found"}, 404

@app.route('/logout', methods=["DELETE"])
def delete():
    if request.method == "DELETE":
        session['user'] = None
        return {}, 204

@app.route('/create_user', methods=["POST"])
def add_user():
    if request.method == "POST":
        try:
            json_dict = request.get_json()
            new_user = User(
                username = json_dict.get("username"),
                password = json_dict.get("password"),
                email = json_dict.get("email"),
                first_name = json_dict.get("first_name"),
                last_name = json_dict.get("last_name"),
                image = json_dict.get("image"),
                wallet_address = json_dict.get("wallet_address")
                
            )
            
            db.session.add(new_user)
            db.session.commit()
            session["user"] = new_user.id 
            # After the user is created and submitted to the data base we have the set the session to that new users id
            # so that when they create there account it wont automaticly log them out
        # this adds it to our table
            return new_user.to_dict(),201
        except Exception as e:
            print(e)
            return make_response({"errors": ["validation errors"]}, 404)

#############################

#Get all users and create a new user
class Users_Route(Resource):
    def get(self):
        all_users = User.query.all()
        user_dict =[]
        for user in all_users:
            user_dict.append(user.to_dict(rules = ('-user._password_hash','-user_project.user', '-project_comment.user', '-project.user',)))
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
    
api.add_resource(Projects_Route, '/projects')

#Get all projects a user has created. 
#Create a new project based on a users ID
class Projects_By_User(Resource):
    def get(self, user_id):
        user_project = Project.query.filter(Project.user_id == user_id).all()
        user_project_dict =[]
        for project in user_project:
            user_project_dict.append(project.to_dict())
        return make_response(user_project_dict, 200)
    def post(self, user_id):
        try:
            data = request.get_json()
            new_project = Project(name=data['name'], type=data['type'], image=data['image'], description=data['description'], funding_needed=data['funding_needed'], deadline=datetime.strptime(data['deadline'], '%Y-%m-%d'), user_id=user_id, status=True)
            db.session.add(new_project)
            db.session.commit()
            return make_response(new_project.to_dict(), 201)
        except:
            return make_response({"errors": ["validation errors"]}, 400)
        
api.add_resource(Projects_By_User, '/<int:user_id>/projects/')
        
#Ability to patch an individual users project! 
#Ability to delete an individual users project.
#❗This need to be updated to ONLY allow the changing of project title and project type
class Project_By_User_Id(Resource):
    def patch(self, user_id, project_id):
        one_project = Project.query.filter(Project.id == project_id).first()
        one_user = User.query.filter(User.id == user_id).first()
        if one_project and one_user:
            try:
                data = request.get_json()
                for attr in data:
                    if attr == 'deadline':
                       data[attr] = datetime.strptime(data[attr], '%Y-%m-%d').date()
                    setattr(one_project, attr, data[attr])
                db.session.add(one_project)
                db.session.commit()
                return make_response(one_project.to_dict(), 202)
            except:
                return make_response({"errors": ["validation errors"]}, 400)
        else:
            return make_response({"error": ["Project not found"]}, 404)
        
    def delete(self, user_id, project_id):
        one_project = Project.query.filter(Project.id == project_id).first()
        one_user = User.query.filter(User.id == user_id).first()
        if one_project and one_user:
            db.session.delete(one_project)
            db.session.commit()
            return make_response({"message": "Project deleted"}, 202)
        else:
            return make_response({"error": ["Project not found"]}, 404)

api.add_resource(Project_By_User_Id, '/<int:user_id>/projects/<int:project_id>')


#View a single Project. Post a new project, patch an existing project, and delete a project 
class Project_By_Id(Resource):
    def get(self, id):
        project = Project.query.filter(Project.id == id).first()
        return make_response(project.to_dict(), 200)

api.add_resource(Project_By_Id, '/projects/<int:id>')

#Get a list of all the projects that a given user has funded. 
class User_Project_By_Id(Resource):
    def get(self, user_id):
        users_projects = User_Project.query.filter(User_Project.user_id == user_id).all()
        user_project_dict =[]
        for project in users_projects:
            user_project_dict.append(project.to_dict())
        return make_response(user_project_dict, 200)

api.add_resource(User_Project_By_Id, '/user_funded_project/<int:user_id>/')

#Add a project to a user's list of funded projects.
class Fund_A_Project(Resource):
    def post(self, user_id, project_id):
        try:
            data = request.get_json()
            new_fund_amount = User_Project(user_id=user_id, project_id=project_id, user_funded_amount=data['user_funded_amount'])
            db.session.add(new_fund_amount)
            db.session.commit()
            return make_response(new_fund_amount.to_dict(), 201)
        except:
            return make_response({"errors": ["validation errors"]}, 400)
        
api.add_resource(Fund_A_Project, '/fund_project/<int:user_id>/<int:project_id>')

#Get all comments for a single project. Post a new comment for a project.
class Project_Comments_By_ID(Resource):
    def get(self, project_id):
        project_comments = Project_Comment.query.filter(Project_Comment.project_id == project_id).all()
        project_comment_dict =[]
        for comment in project_comments:
            project_comment_dict.append(comment.to_dict())
        return make_response(project_comment_dict, 200)

api.add_resource(Project_Comments_By_ID, '/project_comments/<int:project_id>')

class Creating_Project_Comment(Resource):
    def post(self, user_id, project_id):
        try:
            data = request.get_json()
            new_comment = Project_Comment(comment_text=data['comment_text'], user_id=user_id, project_id=project_id)
            db.session.add(new_comment)
            db.session.commit()
            return make_response(new_comment.to_dict(), 201)
        except:
            return make_response({"errors": ["validation errors"]}, 400)

api.add_resource(Creating_Project_Comment, '/project_comments/<int:user_id>/<int:project_id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
