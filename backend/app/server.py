from flask import Flask, jsonify
from utils import get_metrics, get_detected_frauds
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return jsonify({"message": "API de Detecção de Fraudes - Flask"})

@app.route("/metrics", methods=["GET"])
def metrics():
    return jsonify(get_metrics())

@app.route("/frauds", methods=["GET"])
def frauds():
    frauds_detected = get_detected_frauds()
    return jsonify(frauds_detected.to_dict(orient='records'))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
