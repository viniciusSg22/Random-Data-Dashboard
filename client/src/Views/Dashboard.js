import React, { useEffect, useState } from 'react'
import ApexChart from '../Components/ApexChart'
import axios from 'axios'
import { BASE_URL } from '../utils/requests'

export default function Dashboard() {
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
    }, 10000)
  }, [])

  // console.log(number, hora)

  useEffect(() => {
    const dados = {
      numero: number,
      hora: hora
    }
    axios.post(`${BASE_URL}/api`, dados).then(res => {
    })
  }, [hora, number])

  return (
    <div>
      <h1>Dashboard</h1>
      <ApexChart />
      {number}
    </div>
  )
}
