import os
from app import create_app
from app.extensions import db
from app.seeds.seed_services import seed_services
from app.seeds.seed_users import seed_users
from app.seeds.seed_settings import seed_settings   

app = create_app()

with app.app_context():
    db.create_all()  # Create tables if they don't exist

    try:
        seed_services()
        seed_users()
        seed_settings()
        print("Database seeding complete.")
    except Exception as e:
        pass


if __name__ == '__main__':
    app.run(host= '0.0.0.0', port=int(os.environ.get('PORT', 10000)))
