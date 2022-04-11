//* INFO
/**
    * Returns calculated font size for given gameID to fit in summonerCard
    *
    * @param gameId - summoner gameId
*/
export function fitGameId(gameId) {

    //* resizes font and then returns
    const gameIdLen = parseInt(gameId.length)

    //* checks how many letters missing from max gamd id lenght
    const remain = 16 - gameIdLen

    //* the more letters missing the bigger the font gets
    const fontSize = 30 + (remain * 2)

    return fontSize

}
