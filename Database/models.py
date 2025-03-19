class Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    intensity = db.Column(db.Float)
    likelihood = db.Column(db.Float)
    relevance = db.Column(db.Float)
    year = db.Column(db.Integer)
    country = db.Column(db.String(100))
    topic = db.Column(db.String(100))
    region = db.Column(db.String(100))
    city = db.Column(db.String(100))

db.create_all()
