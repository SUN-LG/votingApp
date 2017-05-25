const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('newpoll')
  })
  .post((req, res) => {

  })

module.exports = router;
