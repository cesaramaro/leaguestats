import tinycolor from "tinycolor2"
/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ //* simplyfies use to tiny color to just return the color without the extra steps
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

//* INFO
/**
    * Returns darker color in hex as string
    *
    * @param color - the color as one of the valid color input format.
    * @param amount - amount to darken 0 - 100; 100 is black 
*/
export function darken(color, amount) {

    var ogColor = new tinycolor(color)
    const darkerColor = ogColor.darken(amount).toString('hex')

    return darkerColor

}

//* INFO
/**
    * Returns brighter color in hex as string
    *
    * @param color - the color as one of the valid color input format.
    * @param amount - amount to darken 0 - 100; 100 is white 
*/
export function brighten(color, amount) {

    var ogColor = new tinycolor(color)
    const lighterColor = ogColor.brighten(10).toString('hex')

    return lighterColor

}

//* INFO
/**
    * Returns color with better saturation and light levels
    *
    * @param color - the color as one of the valid color input format.
*/
export function shiftColor(color) {

    const ogColor = new tinycolor(color).toHsl()
    var shifted = new tinycolor(color).toHsl()

    if (ogColor.l > .75) {

        shifted.l = .75

    } else if (ogColor.l < .25) {

        shifted.l = .25

    }

    if (ogColor.s > .75) {

        shifted.s = .75

    } else if (ogColor.s < .25) {

        shifted.s = .25

    }

    return new tinycolor(shifted).toHexString()

}