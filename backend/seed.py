from app import create_app

from app.seeds.seed_services import seed_services
from app.seeds.seed_users import seed_users
from app.seeds.seed_settings import seed_settings



app = create_app()

with app.app_context():

    seed_services()
    seed_users()
    seed_settings()

    print("Database seeding complete.")