function attack_1 (nr: number) {
    if (nr < 20) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        basic.pause(300)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
}
let attack1 = 0
let status = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorStop(maqueen.Motors.All)
        status = 505
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(1200)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 20) {
            attack1 = 0
            for (let index = 0; index < 5; index++) {
            	
            }
        }
    }
})
