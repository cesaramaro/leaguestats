/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ //* This component Creates a Card for content of given color andf with 80% transparency
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

import { getAccentColor, getBackgroundColor } from "../lib/shiftColor"

export default function Card({ children, color, className }) {

    var DARKER = getAccentColor(color)

    return (
        <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: String(color) + "CC" }}>
            {children}
        </ div>
    )

}