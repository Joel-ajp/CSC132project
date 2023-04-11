from flask import Flask, render_template, jsonify
import json
from requests import get

HOST = "localhost"
PORT = 1234
DEBUG = False


app = Flask(__name__)

@app.route("/")
def landingPageIndex():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()