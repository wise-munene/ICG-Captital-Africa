from flask import Blueprint, request, jsonify
from ..models.quote import Quote
from ..extensions import db

quote_bp = Blueprint('quotes', __name__, url_prefix='/api/quotes')  # this helps to avoid route conflicts and makes it clear that these routes are for quotes

@quote_bp.route('/', methods=['POST'])
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

@quote_bp.route('/', methods=['GET'])
def get_quotes():
    quotes = Quote.query.all()
    data = [
        {
            'id': str(quote.id),
            'name': quote.name,
            'email': quote.email,
            'message': quote.message,
            'service_id': str(quote.service_id),
            'description': quote.description,
            'budget_range': quote.budget_range,
            'status': quote.status,
            'created_at': quote.created_at.isoformat()
        } for quote in quotes
    ]
    return jsonify(data), 200