import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { BASE_URL } from '../utils/requests'

export default function ApexChart() {
  const [array, setArray] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/api/list`).then((res) => {
      setArray(res.data)
    })
  })
  const myCategories = array.map((x) => x.createdAt)
  const myData = array.map((x) => x.numero)
  const dados = {
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: myCategories
      }
    },
    series: [
      {
        name: 'series-1',
        data: myData
      }
    ]
  }
  return (
    <div>
      <Chart
        options={dados.options}
        series={dados.series}
        type='line'
        width='1000' />
    </div>
  )
}
