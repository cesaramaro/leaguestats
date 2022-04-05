export function fitGameId(gameId) {

    //* resizes font and then returns
    var gameIdFontSize = resizeFont(parseInt(gameId.length))

    return gameIdFontSize

}

export function resizeFont(length) {

    //* checks how many letters missing from max gamd id lenght
    var remain = 16 - length
    //* the more letters missing the bigger the font gets
    var fontSize = 30 + (remain * 3)

    return fontSize

}

export function getGameId() {

    // ! make fetch actual name from api

    return 'Kwahson'
}
