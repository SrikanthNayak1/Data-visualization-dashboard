@app.route('/data', methods=['GET'])
def get_data():
    results = Data.query.all()
    return jsonify([{
        "intensity": d.intensity,
        "likelihood": d.likelihood,
        "relevance": d.relevance,
        "year": d.year,
        "country": d.country,
        "topic": d.topic,
        "region": d.region,
        "city": d.city
    } for d in results])
