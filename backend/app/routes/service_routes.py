from flask import Blueprint, request, jsonify
from ..models.service import Service

service_bp = Blueprint('services', __name__,url_prefix='/api/services') 

@service_bp.route('/api/services', methods=['GET'])
def get_services():
    services = Service.query.all()

    data = [
       {
            'id': str(service.id),
            'name': service.name,
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
        'name': service.name,
        'description': service.description,
        'slug': service.slug,
        'category': service.category
    }
    return jsonify(data), 200