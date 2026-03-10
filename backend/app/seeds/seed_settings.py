from app.extensions import db
from app.models.site_settings import SiteSetting


def seed_settings():

    existing_settings = SiteSetting.query.first()

    if existing_settings:
        print("Site settings already exist. Skipping.")
        return

    settings = SiteSetting(
        site_name="ICG Capital Africa",
        logo_url=None,
        contact_email="info@icgcapitalafrica.com",
        contact_phone="+254 721 867684",
        address="Nairobi, Kenya",
        social_links={
            "linkedin": "https://linkedin.com",
            "twitter": "https://twitter.com",
            "facebook": "https://facebook.com"
        }
    )

    db.session.add(settings)
    db.session.commit()

    print("Site settings seeded.")