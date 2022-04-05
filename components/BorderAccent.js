/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ //* wraps children in a div with a border
  │ //* user can pass border color, radius and width as well as className for utility classes
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

import { getAccentColor, getBackgroundColor } from "../lib/shiftColor"

export default function AccentBorder({ children, color, borderRadius, borderWidth, className }) {


    const accent = getAccentColor(color)
    const accentDarker = getBackgroundColor(getBackgroundColor(getBackgroundColor(accent))) //!ill change this later to be able to give how much darker and also rename them to brigter and darker
    const accentBrighter = getAccentColor(accent)

    const style = {
        borderColor: accent,
        backgroundColor: accentBrighter,
        color: accentDarker,
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