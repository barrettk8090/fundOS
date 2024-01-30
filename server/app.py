from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import User, Workout, Set, Set_Workout
from services import api, app, db, secret_key, bcrypt
import json
from datetime import datetime