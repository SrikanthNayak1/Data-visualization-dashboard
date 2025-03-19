Data Visualization Dashboard

Overview

This project is a Data Visualization Dashboard that uses Flask (Python) for the backend, PostgreSQL for the database, and React.js with D3.js for the frontend. The dashboard displays insights from a JSON dataset and provides interactive filters.

Features

Stores JSON data in a PostgreSQL database

Uses Flask API to serve data

React.js frontend with interactive charts

D3.js for data visualization

Filters for Year, Country, Topic, Sector, etc.

Fully responsive UI

Tech Stack

Backend: Flask, SQLAlchemy, PostgreSQLFrontend: React.js, D3.js, BootstrapDatabase: PostgreSQLDeployment: Render (backend), Vercel (frontend)

Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/yourusername/data-visualization-dashboard.git
cd data-visualization-dashboard

2️⃣ Set Up Backend (Flask)

Create a Virtual Environment and Install Dependencies

python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows
pip install flask flask-cors flask-sqlalchemy psycopg2

Create a PostgreSQL Database

Install PostgreSQL and create a database datavis_db

Update username/password in app.py

Run Flask Backend

python app.py

✅ Server runs at http://127.0.0.1:5000/

3️⃣ Load JSON Data into Database

python import_data.py

4️⃣ Set Up Frontend (React)

Install Dependencies

cd frontend
npm install

Run React App

npm start

✅ Frontend runs at http://localhost:3000/

API Endpoints

GET /data → Fetch all data from the database

Deployment

Deploy Backend on Render

Create a Render account

Deploy the Flask app

Deploy Frontend on Vercel