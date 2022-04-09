import { Hidden } from "@material-ui/core"
import { darken } from "../../lib/shiftColor"

//! i could make this one function and give it default values which will be homepage values

// * INFO
/**
    * Specific function for use in Home Page.
    * Wraps given HTML between two background layers for background and dim color
    *
    * @param children - html code between tags
    * @param imageSrc - string with image src as follows '/images/{image}'  
*/
export function BackgroundHome({ children, imageSrc }) {

    //~if no image set default image
    if (!imageSrc) { imageSrc = 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/uikit/backdrop-magic/backdrop-magic.png' }

    // * creates styles for background and for dim layer
    const style = {
        bgImage: {
            backgroundImage: 'url(' + imageSrc + ')',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        dim: {
            background: '#00000066'
        }
    }

    return (
        <div id="home-bg" className="h-screen w-screen" style={style.bgImage}>
            <div id='home-bg-dim' className="h-screen w-screen" style={style.dim}>

                {
                    children
                    // ^ page html wrapped around background layer
                }

            </div>
        </div >
    )

}

// * INFO
/**
    * Specific function for use in Summoner Page.
    * Wraps given HTML between two background layers for background and dim color
    *
    * @param children - html code between tags
    * @param imageSrc - string with image src as follows '/images/{image}'  
    * @param color - Dominant color fetched from background image for gradient layer
*/
export function BackgroundSummoner({ children, imageSrc, color }) {

    //~ if no color make it grey
    if (!color) { color = '#808080' }
    //~if no image set default image
    if (!imageSrc) { imageSrc = 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/uikit/backdrop-magic/backdrop-magic.png' }

    // * gets darker color from helper function
    var darker = darken(color, 10)

    // * creates styles for background and for gradient layer
    const style = {
        bgImage: {
            backgroundImage: 'url(' + imageSrc + ')',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        },
        gradient: {
            background: 'linear-gradient(0deg, ' + darker + ' 30%,' + darker + 'e6 60%,' + darker + '66 100%)',
            overflowX: 'hidden',
            // background: 'linear-gradient(0deg, ' + darker + 'FF, ' + darker + 'CC, ' + darker + '99, ' + darker + '66, ' + darker + '33, ' + darker + '00)',
            // ^ theres 3 sections to the gradient so its not so sharp hex colors have added alpha channels
        }
    }

    return (
        <div id="summoner-bg" className=" h-1/2 w-screen" style={style.bgImage}>
            <div id='summoner-bg-gradient' className="h-screen w-screen" style={style.gradient}>

                {
                    children
                    // ^ page html wrapped around background layer
                }

            </div>
        </div >
    )

}