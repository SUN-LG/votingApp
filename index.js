const path = require('path')
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')

const routes = require('./app/routes')
const app = express()
require('dotenv').load()
require('./app/config/passport')(passport)

mongoose.connect(process.env.MONGO_URI)
mongoose.Promise = global.Promise

app.set('views', path.join(__dirname + 'app/views'))
app.set('view engine', 'ejs')


app.use('/public', express.static(path.join(__dirname + '/public')))

routes(app)

app.use((err, req, res, next) => {
  res.status(500).render('error', {error: err})
})

const port = process.env.PORT
app.listen(port, () => {
  console.log('servering on port:', port);
})
