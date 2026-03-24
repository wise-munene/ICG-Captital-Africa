from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from ..models.user import User
from ..extensions import db, bcrypt

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(
        name=data['name'],
        email=data['email'],
        password=hashed_password,
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    if not bcrypt.check_password_hash(user.password_hash, data['password']):
        return jsonify({'message': 'Incorrect password'}), 401
    
    access_token = create_access_token(identity=str(user.id))
    return jsonify({
        'user': {
            'id': str(user.id),
            'name': user.name,
            'email': user.email,
            'role': user.role
        },
        'access_token': access_token
    }), 200

@auth_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    return jsonify({
        'id': str(user.id),
        'name': user.name,
        'email': user.email,
        'role': user.role,
        'created_at': user.created_at.isoformat()
    }), 200