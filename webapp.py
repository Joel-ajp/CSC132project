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


# Helper function to easly  parallelize multiple functions
def parallelize_functions(*functions):
    processes = []
    for function in functions:
        p = Process(target=function)
        p.start()
        processes.append(p)
    for p in processes:
        p.join()


# Constants for the webapp
HOST = "192.168.1.13"
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


# A function that gets the temperature of the plant perpetually
# def getMoisTemp():
#     while True:

#         # Reads the current moisture from the sensor
#         mois = ss.moisture_read()

#         # read temperature from the temperature sensor
#         temp = ss.get_temp()

#         # Adds the data to a dictonary and assigns the new data to the graph
#         tempData.append(str(temp))

#         moisData.append(str(mois))
        
#         t = time.localtime()
#         labels.append(str(time.strftime("%H:%M:%S", t)))


#         # Prints the data 
#         print("temp: " + str(tempData) + "  moisture: " + str(moisData))
#         time.sleep(30)


# A function to run the app
def run_app():
    # app.run(debug=DEBUG,host=HOST,port=PORT)
    app.run(debug=DEBUG, host=HOST, port=PORT, ssl_context="adhoc")


# To run the app
if __name__ == "__main__":
    # parallelize_functions(getMoisTemp, run_app)
    # app.run(host=HOST,port=PORT,debug=DEBUG)
    run_app()