export default function handler(req, res) {
    const { summoner } = req.query
    res.end(`Summ: ${summoner}`)
  }