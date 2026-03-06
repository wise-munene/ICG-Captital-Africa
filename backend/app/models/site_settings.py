import uuid
from datetime import datetime
from ..extensions import db
from sqlalchemy.dialects.postgresql import UUID

class SiteSettings(db.Model):
    __tablename__ = 'site_settings'  #explicitly set table name
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    site_name = db.Column(db.String(150), nullable=False)
    logo_url = db.Column(db.String(250), nullable=True) #optional field for logo URL
    contact_email = db.Column(db.String(150), nullable=False)
    contact_phone = db.Column(db.String(50), nullable=True) #optional field for contact phone
    address = db.Column(db.String(250), nullable=True) #optional field for address
    social_links = db.Column(db.JSON, nullable=True) #optional field for social media links stored as JSON
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f'<SiteSettings {self.site_name}>'