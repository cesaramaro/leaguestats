export default function handler(req, res) {
    const { summoner, matches, match } = req.query
    res.end(`Summoner: ${summoner}`)
  }