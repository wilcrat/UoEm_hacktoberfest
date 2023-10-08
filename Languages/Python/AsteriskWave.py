#A python script to print (for now) sine
# waves on terminal
import math
import time
import os

# Define Parameters
amplitude = 10  # Controls the height of the peaks
frequency = 5   # Controls the number of waves
speed = 0.1     # Controls the speed of the wave

# Define ANSI escape codes for text color
wave_color = "\033[94m"  # Blue

# Reset ANSI escape codes for text color
reset_color = "\033[0m"

# Infinite Loop to Generate the Wave
while True:
    # Clear the Terminal Screen (Windows)
    os.system("cls")

    # Generate the Wave Pattern
    for x in range(80):
        y = amplitude * math.sin(2 * math.pi * frequency * x / 80.0)
        num_asterisks = int(y) + amplitude

        # Set the text color and print the wave
        print(wave_color + " " * (40 - num_asterisks) + "*" * (2 * num_asterisks + 1) + reset_color)

    # Adjust the Phase of the Wave to Make It Move
    frequency += speed

    # Sleep for a Short Time to Control the Animation Speed
    time.sleep(0.05)
