import React, { useEffect, useState } from 'react'
// import ApexChart from '../Components/ApexChart'
import axios from 'axios'

export default function Dashboard () {
  const [number, setNumber] = useState(0)
  const [horario, setHorario] = useState('')
  let dataObj = new Date()
  const hora = `${dataObj.getFullYear()}-${dataObj.getMonth() + 1}-${dataObj.getDate()} ${dataObj.getHours()}:${dataObj.getMinutes()}:${dataObj.getSeconds()}`

  useEffect(() => {
    setInterval(() => {
      axios.get('https://random-data-api.com/api/number/random_number').then(
        res => {
          setNumber(res.data.decimal)
          setHorario(horario)
        })
    }, 5000)
  }, [])

  console.log(number, hora)

  useEffect(() => {
    const dados = {
      numero: number,
      hora: hora
    }
    axios.post('http://localhost:3001/api', dados).then(res => {
    })
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <ApexChart/> */}
      {number}
    </div>
  )
}
