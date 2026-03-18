import uuid
from datetime import datetime
from ..extensions import db
from sqlalchemy.dialects.postgresql import UUID


class Quote(db.Model):
    __tablename__ = 'quotes'  # explicitly set table name
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(150), nullable=False)
    # index for faster search quotes
    email = db.Column(db.String(150), nullable=False, index=True)
    service_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'services.id'), nullable=False)  # foreign key to services table
    # establish relationship to service
    service = db.relationship('Service', backref='quotes')

    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # optional field for additional details
    description = db.Column(db.Text, nullable=True)
    # optional field for budget range
    budget_range = db.Column(db.String(100), nullable=True)
    status = db.Column(db.String(50), nullable=False,
                       default='pending')  # default status is pending

    def __repr__(self):
        return f'<Quote request from {self.name} for service ID {self.service_id}>'
