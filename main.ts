input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    u += 1
    basic.showNumber(u)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(u)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    u += -1
    basic.showNumber(u)
})
let u = 0
u = 0
basic.showNumber(u)
