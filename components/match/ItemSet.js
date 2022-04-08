

export default function ItemSet({items}) {
    return (
        <div>
            <div className="flex justify-between gap-1">{console.log(items)}
                <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items.item_0} alt=""></img></span></div>
                <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items.item_1} alt=""></img></span></div>
                <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items.item_2} alt=""></img></span></div>
            </div>
            <div className="flex justify-between gap-1 pt-1 w-max">
                <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items.item_3} alt=""></img></span></div>
                <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items.item_4} alt=""></img></span></div>
                <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"><img className="object-cover" src={items.item_5} alt=""></img></span></div>
            </div>
        </div>
    )
}


