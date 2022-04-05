/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ //* This component Creates a Card of a given color and 80% transparency that wraps around html content
  │ //* card can take css classNames/utility classes and pass the right over to the parent div
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

export default function Card({ children, color, className }) {

    return (
        <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: String(color) + "CC" }}>
            {
                children
                // ^ html content
            }
        </ div>
    )

}