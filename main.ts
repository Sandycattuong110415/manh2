input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 162)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
