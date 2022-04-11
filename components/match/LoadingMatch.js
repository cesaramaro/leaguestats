import Card from '../common/card'
import ItemSet from './ItemSet'
import ChampionIcon from './ChampionIcon'
import Spells from './Spells'
import KDA from './KDA'
import Stats from './Stats'
import Time from './Time'

export default function LoadingMatch() {
        return (
            <Card className="flex h-150 w-700 center gap-4 text-gray-200 font-semibold shadow-lg hover:shadow-xl animate-pulse">
                <ChampionIcon/>
                <Spells/>
                <KDA />
                <ItemSet/>
                <Stats/>
                <Time/>
            </Card>
    )
}