import json
from app import db, Data

with open('jsondata.json') as f:
    data = json.load(f)

for item in data:
    new_entry = Data(**item)
    db.session.add(new_entry)

db.session.commit()
