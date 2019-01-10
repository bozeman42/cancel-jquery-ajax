const express = require('express')
const app = express()

const PORT = 5000

app.use(express.static('server/public'))
app.use(express.urlencoded())
app.use((req,res,next) => {
  setTimeout(() => next(), 1000)
})

app.post('/inputcall',(req,res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(PORT, () => console.log(`
Listening on port ${PORT}...
http://localhost:5000
`)
)
