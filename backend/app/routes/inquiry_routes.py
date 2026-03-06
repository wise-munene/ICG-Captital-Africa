from flask import Blueprint, request, jsonify
from ..models.inquiry import Inquiry
from ..extensions import db

inquiry_bp = Blueprint('inquiries', __name__, url_prefix='/api/inquiries')  # this helps to avoid route conflicts and makes it clear that these routes are for inquiries


@inquiry_bp.route('/', methods=['POST'])
def create_inquiry():
    data= request.get_json()

    inquiry = Inquiry(
        name=data.get('name'),
        email=data.get('email'),
        message=data.get('message'),
        subject=data.get('subject'),
    )
    db.session.add(inquiry)
    db.session.commit()
    return jsonify({'message': 'Inquiry created successfully'}), 201


@inquiry_bp.route('/', methods=['GET'])
def get_inquiries():
    inquiry = Inquiry.query.all()
    data = [
        {
            'id': str(inquiry.id),
            'name': inquiry.name,
            'email': inquiry.email,
            'message': inquiry.message,
            'subject': inquiry.subject,
            'created_at': inquiry.created_at.isoformat(),
            'status': inquiry.status
        }
        for inquiry in inquiry
    ]
    return jsonify(data), 200