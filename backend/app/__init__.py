from flask import Flask
from .extensions import db, migrate, jwt
from .config import Config
from .routes.service_routes import service_bp
from .extensions import bcrypt, jwt, db, migrate
from .routes.auth_routes import auth_bp
from flask_cors import CORS

from .models import *


def create_app():
    app = Flask(__name__)

    CORS(app)
    app.config.from_object(Config)
    app.register_blueprint(service_bp) # Register the service blueprint
    app.register_blueprint(auth_bp) # Register the auth blueprint

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)

    return app