import uuid
from datetime import datetime
from ..extensions import db
from sqlalchemy.dialects.postgresql import UUID

class Inquiry(db.Model):
    __tablename__ = 'inquiries'  #explicitly set table name
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(50), nullable=False, default='open') #default status is open  

    def __repr__(self):
        return f'<Inquiry {self.subject} from {self.name}>'