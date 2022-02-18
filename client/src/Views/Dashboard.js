import React, { useEffect, useState } from 'react'
import ApexChart from '../Components/ApexChart'
import axios from 'axios'
import { BASE_URL } from '../utils/requests'

export default function Dashboard () {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    setInterval(() => {
      axios.get('https://random-data-api.com/api/number/random_number').then(
        res => {
          setNumber(res.data.decimal)
        })
    }, 10000)
  }, [])

  useEffect(() => {
    if (number === 0) {} else {
      const dados = {
        numero: number
      }
      axios.post(`${BASE_URL}/api`, dados).then(res => {
      })
    }
  }, [number])

  return (
    <div>
      <h1>Dashboard</h1>
      <ApexChart teste={number} style={{margin: '0 auto'}} />
    </div>
  )
}
