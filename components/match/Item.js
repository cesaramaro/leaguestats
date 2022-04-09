export default function Item({item}) {
    if(!item) {
        return(
            <div className="flex flex-col items-center"><span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"></span></div>
        )
    }
    const itemURL = getIconURL(item) || 'x'
    return (
        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={itemURL} alt=""></img></span></div>
    )
}

function getIconURL(iconID) {
    if (iconID === 0) return;
    return `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${iconID}.png`
}