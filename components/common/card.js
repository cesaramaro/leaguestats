// * INFO
/**
    * Wraps children HTML in a card of a given color with 80% transparency
    * Cards are black by default
    *
    * @param children - html code between tags
    * @param color - Dominant Color fetched from background. Will give card color  
    * @param className - passes on css classnames or utility classes to wrapping div
*/
export default function Card({ children, color, className }) {

    //~ if no color set to black
    if (!color) {
        color = '#000000'
    }

    return (
        <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: String(color) + "CC" }}>
            {
                children
                // ^ html content
            }
        </ div>
    )

}