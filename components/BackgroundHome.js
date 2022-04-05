
/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ //* creates background layer for home page
  │ //* One div has the image the other has a dim layer
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
// ! image source as follows /images/{image} doesnt need relative position thanks to next.js
export default function BackgroundHome({ children, imageSrc }) {


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