input.onButtonPressed(Button.A, function () {
    basic.showString("TE AMO MI BB CONSENTIDO,GRACIAS POR LLEGAR A MI VIDA,A HACERME MEJOR,ME ALEGRAS CADA DIA  ")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
    }
})
