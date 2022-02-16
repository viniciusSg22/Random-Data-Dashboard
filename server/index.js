const express = require('express')
const cors = require('cors')
const { Dados } = require("./database/models")

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api', async (req, res) => {
  const dado = req.body;
  await Dados.create(dado);
  res.json(dado)
})

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001')
})
