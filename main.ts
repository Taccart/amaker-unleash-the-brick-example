UnleashTheBricks.onMessageStopReceived(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
})
UnleashTheBricks.onMessageDangerReceived(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    UnleashTheBricks.incrementRadioGroup()
})
UnleashTheBricks.onMessageStartReceived(function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
})
console.error(control.deviceName())
UnleashTheBricks.setLogLevel(LogLevel.Debug)
UnleashTheBricks.setEchoToConsole(true)
UnleashTheBricks.initCommunicationChannel(CommunicationChannel.Radio)
UnleashTheBricks.emitStatus()
UnleashTheBricks.setBotStatus(BotStatus.Searching)
UnleashTheBricks.emitStatus()
basic.forever(function () {
    UnleashTheBricks.emitHeartBeat()
    control.waitMicros(100000000)
})
