module.exports = (app) => {
  app.get('/', (req, res) => {
    res.redirect('./polls')
  })

  app.use('/polls', require('./polls'))
  app.use('/mypolls', require('./mypolls'))
  app.use('/newpoll', require('./newpoll'))

  app.use((req, res) => {
    if (!res.headersSent) res.status(404).render('404')
  })
}
