from app import create_app
from app.extensions import db
from app.models.service import Service

app = create_app()

services = [
    {
        "title": "Business Advisory Services",
        "slug": "business-advisory-services",
        "description": "Strategic advisory services helping organizations improve performance and growth."
    },
    {
        "title": "Business Valuation",
        "slug": "business-valuation",
        "description": "Independent valuation services for businesses, investments, and transactions."
    },
    {
        "title": "Capital Mobilization",
        "slug": "capital-mobilization",
        "description": "Helping businesses and projects raise capital from investors and financial institutions."
    },
    {
        "title": "Corporate Finance",
        "slug": "corporate-finance",
        "description": "Financial structuring, investment advisory, and transaction support."
    },
    {
        "title": "Due Diligence",
        "slug": "due-diligence",
        "description": "Financial, operational, and strategic due diligence for investment decisions."
    },
    {
        "title": "Mergers and Acquisitions",
        "slug": "mergers-acquisitions",
        "description": "Advisory services for mergers, acquisitions, and strategic partnerships."
    },
    {
        "title": "Project Management",
        "slug": "project-management",
        "description": "Planning and execution support for complex projects and investments."
    },
    {
        "title": "Transaction Advisory",
        "slug": "transaction-advisory",
        "description": "End-to-end support for financial transactions and investment deals."
    }
]

with app.app_context():
    for service in services:
        s = Service(**service)
        db.session.add(s)

    db.session.commit()
    print("Services seeded successfully!")


SELECT* FROM quotes;