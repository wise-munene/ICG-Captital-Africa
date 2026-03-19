from flask import Blueprint, request, jsonify
from ..models.quote import Quote
from ..extensions import db

quote_bp = Blueprint('quotes', __name__, url_prefix='/api/quotes')  # this helps to avoid route conflicts and makes it clear that these routes are for quotes

@quote_bp.route('', methods=['POST'])
def create_quote():
    data = request.get_json()

    quote = Quote(
        name=data.get('name'),
        email=data.get('email'),
        message=data.get('message'),
        service_id=data.get('service_id'),
        description=data.get('description'),  # optional field
    )
    db.session.add(quote)
    db.session.commit()
    return jsonify({'message': 'Quote created successfully'}), 201

@quote_bp.route('', methods=['GET'])
def get_quotes():
    quotes = Quote.query.order_by(Quote.created_at.desc()).all()  # order by created_at descending to get the most recent quotes first
    
    results = []
    for quote in quotes:
        results.append({
            'id': str(quote.id),
            'name': quote.name,
            'email': quote.email,
            'message': quote.message,
            'service_id': str(quote.service_id),
            'description': quote.description,
            'created_at': quote.created_at.isoformat()  # convert datetime to ISO format string
        })

    return jsonify(results), 200

@quote_bp.route('/<id>', methods=['PUT'])
def update_quote(id):
    quote= Quote.query.get(id)
    if not quote:
        return jsonify({'message': 'Quote not found'}), 404
    
    data=request.json
    quote.status= data.get('status',quote.status)  # update status if provided, otherwise keep existing status
    db.session.commit()
    return jsonify({'message': 'Quote updated successfully'}), 200