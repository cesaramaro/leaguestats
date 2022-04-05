import tinycolor from "tinycolor2"
/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ //* We can do this with HSLA and not use the imported plugin
  │ //* Chnage L by % and set the A as .8
  │ //* And set format of COLOR as hslString or HslArray
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

export function getBackgroundColor(color) {

    var ogColor = new tinycolor(color)
    const backgroundColor = ogColor.darken(10).toString('hex')

    return backgroundColor

}

export function getAccentColor(color) {

    var ogColor = new tinycolor(color)
    const accentColor = ogColor.brighten(10).toString('hex')

    return accentColor

}