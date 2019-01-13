# Fourier Research Program
A simple HTML web-development project, aiming to give an easy insight into the mathematical fenomenon [Fourier series](http://mathworld.wolfram.com/FourierSeries.html).

## The interface
The interface is designed to be easy-to-use, while enabling the user to change all of the aspects in the animation:
* `Time progression`, equal to the speed of the animation.
* The `thetafactor` for the equation, equal to the amount of rings generated on the rotating axis.
* A pause button for easy analysis of the wave. Handy to visualize [Gibbs phenomenon﻿](https://en.wikipedia.org/wiki/Gibbs_phenomenon﻿) for example.

***
### Examples:
![Interface screenshot](https://github.com/SkySails/fourierResearch/blob/master/screenshots/screenshot.jpg?raw=true)
![Same, but with changed variables.](https://github.com/SkySails/fourierResearch/blob/master/screenshots/screenshot_faster.jpg?raw=true)

# Installation
## Introduction
This project is based on `HTML`, `JS` and `CSS` and all the files are configured in relation to each other. When cloning this repository you should get a folder containing all files you need to get it up and running. 

Due to restrictions in the [p5](https://p5js.org/) library, image resources can only be used while running on a server.
This means that to get the project running correctly, you need to host it on a server (local or web). If you just want to play around with it, i'd recommend using `python`'s built- in http server.

## Details
### Installing python
1. Install `python`. If you're using linux, this is probably already installed. If, however, you're using a Windows operating system up need to download and install python for windows. (https://www.python.org/downloads/)
2. Check if python is installed correctly by typing `python -V` in a command prompt, the result should return the version of python installed. 
### Starting the server
1. Navigate to the directory where the project was downloaded.
2. Start the server. The command is different depending on what version of python you're using. Replace `[port]` with an available port.   
**For python3.x:** `python3 -m http.server [port]`  
**For python2.x** `python -m SimpleHTTPServer [port]`  
3. Open a browser and navigate to `localhost:[port]`. You should now be able to see and interact with the project.
