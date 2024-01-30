from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy import MetaData, event
from sqlalchemy_serializer import SerializerMixin
import datetime

from sqlalchemy.ext.hybrid import hybrid_property
from services import db, bcrypt

class User(db.Model, SerializerMixin):
    pass

class Project(db.Model, SerializerMixin):
    pass

#User Project JOIN Table: Use for showing the projects a user has funded 
class User_Project(db.Model, SerializerMixin):
    pass

class Project_Comments(db.Model, SerializerMixin):
    pass

