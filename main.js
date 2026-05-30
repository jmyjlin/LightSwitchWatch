enum RadioMessage {
    message1 = 49434,
    lightsOn = 30507,
    lightsOff = 17858
}
ml.onStart(ml.event.Still, function () {
    basic.clearScreen()
})
radio.onReceivedMessage(RadioMessage.lightsOff, function () {
    basic.clearScreen()
})
ml.onStart(ml.event.Clapping, function () {
    radio.sendMessage(RadioMessage.lightsOn)
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
ml.onStart(ml.event.Unknown, function () {
    basic.clearScreen()
})
radio.onReceivedMessage(RadioMessage.lightsOn, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
ml.onStart(ml.event.Waving, function () {
    radio.sendMessage(RadioMessage.lightsOff)
    basic.showIcon(IconNames.No)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(52)
