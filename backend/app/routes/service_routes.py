from flask import Blueprint, jsonify, request
from ..models.service import Service
from ..utilis.admin_required import admin_required
from ..extensions import db

service_bp = Blueprint('services', __name__, url_prefix='/api/services')


@service_bp.route('/', methods=['GET'])
def get_services():
    services = Service.query.all()

    data = [
        {
            'id': str(service.id),
            'title': service.title,   # change from name to title if your model uses title
            'description': service.description,
            'slug': service.slug,
            'category': service.category
        }
        for service in services
    ]

    return jsonify(data), 200


@service_bp.route('/<uuid:service_id>', methods=['GET'])
def get_service(service_id):

    service = Service.query.get_or_404(service_id)

    data = {
        'id': str(service.id),
        'title': service.title,
        'description': service.description,
        'slug': service.slug,
        'category': service.category
    }

    return jsonify(data), 200

@service_bp.route('/', methods=['POST'])
@admin_required
def create_service():

    data = request.get_json()  

    service= Service(
        title=data['title'],
        description=data['description'],
        slug=data['slug'],
        category=data['category']
    )

    db.session.add(service)
    db.session.commit() 

    return jsonify({'message': 'Service created successfully', 'service': data}), 201

@service_bp.route('/<uuid:service_id>', methods=['PUT'])
@admin_required
def update_service(service_id):

    service = Service.query.get_or_404(service_id)
    data = request.get_json()

    service.title = data['title']
    service.description = data['description']
    service.slug = data['slug']
    service.category = data['category']

    db.session.commit()

    return jsonify({'message': 'Service updated successfully', 'service': data}), 200

@service_bp.route('/<uuid:service_id>', methods=['DELETE'])
@admin_required
def delete_service(service_id):

    service = Service.query.get_or_404(service_id)

    db.session.delete(service)
    db.session.commit()

    return jsonify({'message': 'Service deleted successfully'}), 200
