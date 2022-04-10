import Image from "next/image";

export default function Item({ item, color }) {
    if (!item) {
        return (
            <div className="flex flex-col items-center"><span className="h-40 w-40 rounded-lg overflow-hidden flex" style={color}></span></div>
        )
    }
    const itemURL = getIconURL(item) || 'x'
    return (
        <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex" style={color}><Image layout="intrinsic" src={itemURL} alt="summoner item" width={"100%"} height={"100%"}></Image></span></div>
    )
}

function getIconURL(iconID) {
    if (iconID === 0) return;
    return `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${iconID}.png`
}