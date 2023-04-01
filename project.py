######################################################################################################################
# Name: Group 1 
# Date: 
# Description: CSC 132 Final Project
######################################################################################################################


# Imports the needed libraries
import tkinter as tk
import time
import board
from adafruit_seesaw.seesaw import Seesaw



# The code to get and display the soil moisture and temperature data.

i2c_bus = board.I2C()  # uses board.SCL and board.SDA

# i2c_bus = board.STEMMA_I2C()  # For using the built-in STEMMA QT connector on a microcontroller

ss = Seesaw(i2c_bus, addr=0x36)

while True:
    # read moisture level through capacitive touch pad
    touch = ss.moisture_read()

    # read temperature from the temperature sensor
    temp = ss.get_temp()

    # Prints the data 
    print("temp: " + str(temp) + "  moisture: " + str(touch))
    time.sleep(1)


# Beginning of the GUI
mainWindow = Tk()








###MAIN###



