/**=======================
 * *       INFO
 * crops images currently not working 
 * needs to run after render()
 * requires uniquie ID per match canvas
 *========================**/

export default function cropImg(matches) {
    const canvas = document.getElementById(matches.id);
    console.log(canvas);
    const ctx = canvas.getContext('2d');

    var image = new Image();
    image.src = matches.champion;

    image.onload = function () {
        ctx.drawImage(image, 10, 10, 100, 100, 0, 0, 100, 100);
    }
}