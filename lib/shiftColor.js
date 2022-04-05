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