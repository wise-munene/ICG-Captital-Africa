from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid #for generating unique identifiers
from backend.app.extensions import db
from sqlalchemy.dialects.postgresql import UUID

class User(db.Model):
    id = db.Column(UUID)(as_uuid=True), primary_key=True, default=uuid.uuid4
    name = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    role = db.Column(db.String(50), nullable=False, default='user') #default role is user

    def __repr__(self):
        return f'<User {self.name}>'



