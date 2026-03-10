from app.extensions import db, bcrypt
from app.models.user import User


def seed_users():

    existing_admin = User.query.filter_by(email="admin@icgcapital.com").first()

    if existing_admin:
        print("Admin user already exists. Skipping.")
        return


    password = bcrypt.generate_password_hash("admin123").decode("utf-8")

    admin = User(
        name="Admin",
        email="admin@icgcapital.com",
        password_hash=password,
        role="admin"
    )

    db.session.add(admin)
    db.session.commit()

    print("Admin user created.")