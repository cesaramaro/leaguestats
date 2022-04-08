import MinionIcon from '../../public/icons/MinionIcon.svg'
import GoldIcon from '../../public/icons/GoldIcon.svg'
import DamageIcon from '../../public/icons/DamageIcon.svg'
import KpIcon from '../../public/icons/KpIcon.svg'
import ClockIcon from '../../public/icons/ClockIcon.svg'
import { useMatch } from '../../hooks/helper'
import Card from '../common/card'
import AccentBorder from '../common/BorderAccent'
import Image from 'next/image'
import ItemSet from './ItemSet'

export default function LoadingMatch() {
    const color = '#808080'
    return (
          <Card className="flex h-150 w-700 center gap-4 text-gray-200 font-semibold animate-pulse" color={color}>
                {/* Champion Icon and Level */}
                <div name="left-side-icons" className="h-100 w-1/6 relative">
                    <AccentBorder className="rounded-full w-100 h-100" borderRadius='16px' borderWidth='4px' color={color}>
                        <div name="champion-icn" className='h-full w-full rounded-xl'></div>
                    </AccentBorder>
                    <AccentBorder className="absolute left-[1.938rem] top-[5rem] h-35 w-35" borderRadius={'9999px'} borderWidth='4px' color={color}>
                        <p name="player-level" className="flex text-center place-items-center justify-center h-full font-bold"></p>
                    </AccentBorder>
                </div>

                <div className='flex 1/6'>
                    {/* Summoner Spells */}
                    <div className="flex flex-col justify-center gap-1 w-max">
                        <span className="flex h-30 rounded-lg overflow-hidden">
                        </span>
                        <span className="flex h-30 rounded-lg overflow-hidden">
                        </span>
                    </div>

                    {/* Runes */}
                    <div className="flex flex-col justify-center pl-1 w-max">
                        <span className="flex h-20 rounded-lg overflow-hidden">
                        </span>
                        <span className="flex h-20 rounded-lg overflow-hidden">
                        </span>
                    </div>
                </div>

                {/* KDA */}
                <div className="flex w-2/6 flex-col justify-center center">
                    <p className=""></p>
                    <p className="flex mb-1 text-2xl font-bold"></p>
                    <p className="flex mb-1 text-1xl"></p>
                </div>

                { /* Item set should be a component and each item should be a separate component within the parent */}
                <div className=' center'>
                    <div className="flex flex-col justify-center w-max">
                        <div className="flex justify-between gap-1">
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"></span></div>
                        </div>
                        <div className="flex justify-between gap-1 pt-1 w-max">
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"></span></div>
                            <div className="flex flex-col items-center"> <span className="h-40 w-40 rounded-lg overflow-hidden flex bg-gray-700"></span></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center text-xs w-1/6">
                    <p className="flex text-blue-300">
                        <span className='h-3 center pr-1'></span>
                    </p>
                    <p className="flex text-yellow-300">
                        <span className='h-3 center pr-1'></span>
                    </p>
                    <p className="flex text-red-400">
                        <span className='h-3 center pr-1'></span>
                    </p>
                    <p className="flex text-amber-500">
                        <span className='h-3 center pr-1'></span>
                    </p>
                </div>

                <div className="flex flex-col place-items-center text-sm w-1/6 gap-1">
                    <div className='w-30'>
                        <ClockIcon height='100%' />
                    </div>
                    <p className="flex"></p>
                    <p className="flex text-xs"></p>
                </div>
            </Card>
    )
}


