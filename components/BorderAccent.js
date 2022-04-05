import { brighten, darken, } from "../lib/shiftColor"

// * INFO
/**
    * Wraps children HTML in a div with a border
    *
    * @param children - html code between tags
    * @param color - Dominant Color fetched from background. Will give border color  
    * @param borderRadius - Radius of corners (9999px is full circle) 
    * @param borderWidth - Widht of border
    * @param className - passes on css classnames or utility classes to wrapping div
*/
export default function AccentBorder({ children, color, borderRadius, borderWidth, className }) {

    //~ if no color set to grey
    if (!color) { color = '#808080' }
    //~ if no border radius set to 0px
    if (!borderRadius) { borderRadius = '0px' }
    //~ if no border width set to 2px
    if (!borderWidth) { borderWidth = '2px' }

    const accent = brighten(color, 10)
    const font = darken(color, 20)
    const background = brighten(accent, 10)

    const style = {
        borderColor: accent,
        backgroundColor: background,
        color: font,
        borderRadius: borderRadius,
        borderWidth: borderWidth
    }

    return (
        <div className={String(className) + " items-center justify-center"} style={style}>
            {
                children
                // ^ html content
            }
        </ div >
    )

}