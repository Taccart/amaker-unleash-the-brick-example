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
UnleashTheBricks.setLogLevel(LogLevel.Debug)
UnleashTheBricks.setEchoToConsole(true)
UnleashTheBricks.initCommunicationChannel(CommunicationChannel.Radio)
UnleashTheBricks.setBotStatus(BotStatus.Searching)
UnleashTheBricks.setBotStatus(BotStatus.Capturing)
UnleashTheBricks.setBotStatus(BotStatus.BringingBack)
basic.forever(function () {
    UnleashTheBricks.emitHeartBeat()
    control.waitMicros(10000000)
})
