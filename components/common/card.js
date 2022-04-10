// * INFO
/**
    * Wraps children HTML in a card of a given color with 80% transparency
    * Cards are black by default
    *
    * @param children - html code between tags
    * @param color - Dominant Color fetched from background. Will give card color  
    * @param className - passes on css classnames or utility classes to wrapping div
*/
export default function Card({ children, color, className, outcome }) {

    //~ if no color set to black
    if (!color) {
        color = '#000000'
    }

    // <div className="rounded-2xl" style={{ background: String(color) + "CC" }}>
    //             <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: 'linear-gradient(90deg, #4dea73CC 0%, #ffffff00 25%)' }}></div>

    if (!outcome) {
        return (
            <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: String(color) + "CC" }}>
                {
                    children
                    // ^ html content
                }
            </ div>
        )

    } else if (outcome == 'victory') {

        return (
            <div className="rounded-2xl" style={{ background: String(color) + "CC" }}>
                <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: 'linear-gradient(90deg, #4dea7366 0%, #ffffff00 25%)' }}>

                    {
                        children
                        // ^ html content
                    }
                </div>
            </ div >
        )

    } else if (outcome == 'defeat') {

        return (

            <div className="rounded-2xl" style={{ background: String(color) + "CC" }}>
                <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: 'linear-gradient(90deg, #ea4c4c66 0%, #ffffff00 25%)' }}>
                    {
                        children
                        // ^ html content
                    }
                </div>
            </ div>
        )

    } else if (outcome == 'remake') {
        return (

            <div className="rounded-2xl" style={{ background: String(color) + "CC" }}>
                <div className={String(className) + " text-white rounded-2xl p-6"} style={{ background: 'linear-gradient(90deg, #89867f66 0%, #ffffff00 25%)' }}>
                    {
                        children
                        // ^ html content
                    }
                </div>
            </ div>
        )
    }

}