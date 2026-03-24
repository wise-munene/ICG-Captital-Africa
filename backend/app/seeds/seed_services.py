from app.extensions import db
from app.models.service import Service


def seed_services():

    db.session.query(Service).delete()  # Remove existing data
 

    services = [

        {
            "title": "Business Advisory Services",
            "slug": "business-advisory-services",
            "description": "Strategic advisory services to improve business performance and long-term growth.",
            "category": "Advisory"
        },

        {
            "title": "Business Valuation",
            "slug": "business-valuation",
            "description": "Professional valuation services for businesses, investments, and transactions.",
            "category": "Finance"
        },

        {
            "title": "Capital Mobilization",
            "slug": "capital-mobilization",
            "description": "Helping companies and projects raise capital from investors and financial institutions.",
            "category": "Finance"
        },

        {
            "title": "Business Establishment & Support",
            "slug": "business-establishment-support",
            "description": "Supporting companies with market entry, regulatory compliance, and operational setup.",
            "category": "Advisory"
        },

        {
            "title": "Divestiture and Exit Strategies",
            "slug": "divestiture-exit-strategies",
            "description": "Advising companies on strategic exits, divestitures, and restructuring opportunities.",
            "category": "Strategy"
        },

        {
            "title": "Human Resource Management",
            "slug": "human-resource-management",
            "description": "Advisory services on HR policies, talent strategy, and workforce development.",
            "category": "HR"
        },

        {
            "title": "Corporate Finance",
            "slug": "corporate-finance",
            "description": "Financial advisory services including capital structuring and financial strategy.",
            "category": "Finance"
        },

        {
            "title": "Due Diligence",
            "slug": "due-diligence",
            "description": "Financial and operational due diligence for investment and acquisition decisions.",
            "category": "Finance"
        },

        {
            "title": "Grant Management",
            "slug": "grant-management",
            "description": "Management and oversight of grant programs and funding initiatives.",
            "category": "Development"
        },

        {
            "title": "Joint Venture Investment",
            "slug": "joint-venture-investment",
            "description": "Facilitating joint ventures and investment partnerships.",
            "category": "Investment"
        },

        {
            "title": "Mergers and Acquisition",
            "slug": "mergers-acquisitions",
            "description": "Advisory services for mergers, acquisitions, and corporate restructuring.",
            "category": "Investment"
        },

        {
            "title": "Private Placements",
            "slug": "private-placements",
            "description": "Advising companies on raising private investment capital.",
            "category": "Investment"
        },

        {
            "title": "Project Management",
            "slug": "project-management",
            "description": "End-to-end planning and execution of complex projects.",
            "category": "Management"
        },

        {
            "title": "Transaction Advisory",
            "slug": "transaction-advisory",
            "description": "Advisory services supporting financial transactions and deal execution.",
            "category": "Finance"
        },

        {
            "title": "Training and Capacity Building",
            "slug": "training-capacity-building",
            "description": "Professional training programs to strengthen organizational capacity.",
            "category": "Training"
        },

        {
            "title": "Research, Market Entry and Insights",
            "slug": "research-market-entry-insights",
            "description": "Market research and strategic insights to support expansion into new markets.",
            "category": "Research"
        },

        {
            "title": "Restructuring and Business Re-engineering",
            "slug": "restructuring-business-reengineering",
            "description": "Helping companies restructure operations and improve efficiency.",
            "category": "Strategy"
        },

        {
            "title": "Strategic Planning and Management",
            "slug": "strategic-planning-management",
            "description": "Long-term strategic planning and execution advisory.",
            "category": "Strategy"
        }

    ]

    for service in services:
        db.session.add(Service(**service))

    db.session.commit()

    print("Services seeded successfully.")