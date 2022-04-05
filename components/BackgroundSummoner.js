import { getBackgroundColor } from "../lib/shiftColor"
/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ //* creates background layer for summoner page
  │ //* enables changing background image and layer said image with a gradient
  │ //* used for respomsive color of summoner page
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
// ! image source as follows /images/{image} doesnt need relative position thanks to next.js
export default function BackgroundSummoner({ children, imageSrc, color }) {

    // * gets darker color from helper function
    var darker = getBackgroundColor(color)

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
            background: 'linear-gradient(0deg, ' + darker + ' 40%,' + darker + 'e6 70%,' + darker + '66 100%)',
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