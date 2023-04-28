######################################################################################################################
# Name: Group 1 
# Date: 
# Description: CSC 132 Final Project
######################################################################################################################

import threading
from flask import Flask, jsonify, render_template, request
import json
import time
from requests import get, post
import board
from adafruit_seesaw.seesaw import Seesaw
from multiprocessing import Process

# The code to get and display the soil moisture and temperature data.

i2c_bus = board.I2C()  # uses board.SCL and board.SDA

ss = Seesaw(i2c_bus, addr=0x36)

# Constants for the webapp
HOST = "0.0.0.0"
PORT = 8080
DEBUG = True

# Variables for the different plant variables
tempData = []
moisData = []
labels = []

# instantiates the app
app = Flask(__name__)

# Landing page function
@app.route("/")
def landingPageIndex():
    return render_template("index.html")

# Page to fetch the temperature
@app.route("/getTemp", methods=["GET"])
def getTemp():
    return jsonify(round(ss.get_temp(),2))

# Page to fetch the moisture
@app.route("/getMois", methods=["GET"])
def getMois():
    return jsonify(round(ss.moisture_read(),2))

# Temperature page function
@app.route("/temp")
def temperaturePageIndex():
    return render_template("temp.html", tempData=tempData, labels=labels)

# Moisture page function
@app.route("/moisture")
def moisturePageIndex():
    return render_template("moisture.html", moisData=moisData, labels=labels)

# Light page function
@app.route("/garden")
def lightPageIndex():
    return render_template("garden.html")


# A function to run the app
def run_app():
    app.run(debug=DEBUG, host=HOST, port=PORT, ssl_context="adhoc")


# To run the app
if __name__ == "__main__":
    run_app()