from flask_sqlalchemy import SQLAlchemy
import uuid #for generating unique identifiers
from ..extensions import db
from sqlalchemy.dialects.postgresql import UUID



class Service(db.Model):
    __tablename__ = 'services'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(150), nullable=False)
    slug = db.Column(db.String(200), unique=True, nullable=False) #slug is means URL friendly version of title
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<Service {self.title}>'
    
