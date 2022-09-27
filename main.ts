let current_temerature = 0
// created by: Adam De Rango
// On spetmeber 27 2022
// This program measures and displays the temeprature 
// created varibale called temperature, we added an input to measure temerature
// it will then show the temerature every 1000ms befroe clearing the screen and restarting
basic.forever(function () {
    current_temerature = input.temperature()
    basic.showNumber(current_temerature)
    basic.pause(1000)
    basic.clearScreen()
})
