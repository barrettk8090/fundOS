from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy import MetaData, event
from sqlalchemy_serializer import SerializerMixin
import datetime

from sqlalchemy.ext.hybrid import hybrid_property
from services import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    #Image set to string for SRC... for now...
    image = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    wallet_address = db.Column(db.String, nullable=True)

    @hybrid_property
    def password(self):
        return self._password_hash
    
    @password.setter
    def password(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self,password):
        return bcrypt.check_password_hash(self._password_hash,password.encode('utf-8'))

class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    #Dropdown Select?? Categories
    type = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=True)
    ##SAVE AS MARKUP?? EG with bold, italic, etc??
    description = db.Column(db.String, nullable=False)
    funding_needed = db.Column(db.Integer, nullable=False)
    current_funding = db.Column(db.Integer, nullable=False, default=0)
    deadline = db.Column(db.DateTime, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


#User Project JOIN Table: Use for showing the projects a user has funded 
class User_Project(db.Model, SerializerMixin):
    __tablename__ = 'user_projects'

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

    user = db.relationship('User', back_populates='user_projects')
    project = db.relationship('Project', back_populates='user_projects')

class Project_Comment(db.Model, SerializerMixin):
    __tablename__ = 'project_comments'

    id = db.Column(db.Integer, primary_key=True)
    comment_text = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

    user = db.relationship('User', back_populates='project_comments')
    project = db.relationship('Project', back_populates='project_comments')




# class Users_Coin(db.Model, SerializerMixin):
#     pass

# class Project_Reward_Tiers(db.Model, SerializerMixin):
#     pass
