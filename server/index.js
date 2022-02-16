const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001')
})
