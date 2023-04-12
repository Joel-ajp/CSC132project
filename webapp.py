######################################################################################################################
# Name: Group 1 
# Date: 
# Description: CSC 132 Final Project
######################################################################################################################

from flask import Flask, render_template, jsonify
import json
from requests import get
import time
#import board
from adafruit_seesaw.seesaw import Seesaw
from multiprocessing import Process

# The code to get and display the soil moisture and temperature data.

#i2c_bus = board.I2C()  # uses board.SCL and board.SDA

# i2c_bus = board.STEMMA_I2C()  # For using the built-in STEMMA QT connector on a microcontroller

#ss = Seesaw(i2c_bus, addr=0x36)

# while True:
#     # read moisture level through capacitive touch pad
#     touch = ss.moisture_read()

#     # read temperature from the temperature sensor
#     temp = ss.get_temp()

#     # Prints the data 
#     print("temp: " + str(temp) + "  moisture: " + str(touch))
#     time.sleep(1)

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
HOST = "localhost"
PORT = 1234
DEBUG = True

app = Flask(__name__)

# Landing page function
@app.route("/")
def landingPageIndex():
    return render_template("index.html")

# Temperature page function
@app.route("/temp")
def temperaturePageIndex():
    return render_template("temp.html")

# A function that gets the temperature of the plant perpetually
def while_function():
    touch = ss.moisture_read()

    # read temperature from the temperature sensor
    temp = ss.get_temp()

    # Prints the data 
    print("temp: " + str(temp) + "  moisture: " + str(touch))
    time.sleep(1)

# A function to run the app
def run_app():
    app.run(debug=False)


if __name__ == "__main__":
    # parallelize_functions(while_function, run_app)
    app.run(host=HOST,port=PORT,debug=DEBUG)