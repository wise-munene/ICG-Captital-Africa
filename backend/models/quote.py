import uuid
from datetime import datetime
from backend.app.extensions import db
from sqlalchemy.dialects.postgresql import UUID


class Quote(db.Model):
    __tablename__ = 'quotes'  #explicitly set table name
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    service_id = db.Column(UUID(as_uuid=True), db.ForeignKey('services.id'), nullable=False) #foreign key to services table
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    
    description = db.Column(db.Text, nullable=True) #optional field for additional details
    budget_range = db.Column(db.String(100), nullable=True) #optional field for budget range
    status = db.Column(db.String(50), nullable=False, default='pending') #default status is pending

    def __repr__(self):
        return f'<Quote request from {self.name} for service ID {self.service_id}>'