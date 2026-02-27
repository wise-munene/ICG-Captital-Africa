import os

class Config:
    # Load environment variables from .env file
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL') # how to connect to the db
    SQLALCHEMY_TRACK_MODIFICATIONS = False  
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')