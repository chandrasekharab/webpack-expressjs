const express = require('express')
const app = express()
const port = 3000

app.get('/components/', (req, res) => {
  res.send('Hello World!12334 uy')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})