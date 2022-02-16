import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div>
      <div className='jumbotron'>
        <h1 className='display-4'>Home Page</h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <hr className='my-4' />
        <p>
          It uses utility classNamees for typography and spacing to space content out within the larger container.
        </p>
        <p className='lead'>
          <Link to='/dashboard'>
          <span className='btn btn-primary btn-lg' href='#' role='button'>Acesse o dashboard</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
