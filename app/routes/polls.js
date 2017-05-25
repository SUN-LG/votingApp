const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const votingPolls = {}
  res.render('polls', {votingPolls})
})

router.get('/:pollId', (req, res) => {
  const pollId = req.params.pollId
  res.render('poll', {})
})

module.exports = router
