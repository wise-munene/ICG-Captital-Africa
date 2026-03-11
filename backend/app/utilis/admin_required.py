from functools import wraps
from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..models.user import User


def admin_required(fn):
    @wraps(fn)
    @jwt_required()
    def wrapper(*args, **kwargs):

        user_id = get_jwt_identity()
        user = User.query.get(user_id)

        if not user or user.role != 'admin':
            return jsonify({'message': 'Admin access required'}), 403
        
        return fn(*args, **kwargs)
    return wrapper