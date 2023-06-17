// tests go here; this will not be compiled when this package is used as a library
basic.showIcon(IconNames.Heart)
TM1650.setIntensity(1)
TM1650.showNumber(8118)
basic.pause(1000)
let myStrip = makerobo.rgb()  //pin16
myStrip.clear()
myStrip.setBrightness(30)
//
//
//
//
//
basic.forever(function() {

    TM1650.showHex(15)
    basic.pause(1000)
    TM1650.showNumber(sonar.ping(DigitalPin.P12, DigitalPin.P13, PingUnit.Centimeters))
    basic.pause(1000)
    myStrip.showRainbow(1, 360)
    basic.pause(1000)
    makerobo.MotorRun(makerobo.Motors.Left, 255)
    makerobo.MotorRun(makerobo.Motors.Right, 255)
    makerobo.MotorRun(makerobo.Motors.Centre, 255)
})