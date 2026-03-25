import os
from app import create_app
from app.extensions import db

app = create_app()

with app.app_context():
    db.create_all()  # Create tables if they don't exist


if __name__ == '__main__':
    app.run(host= '0.0.0.0', port=int(os.environ.get('PORT', 10000)))
