import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarExample01'
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <i className='fas fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item active'>
                <Link to='/'>
                <span className='nav-link' aria-current='page' href='#'>Home</span>
                </Link>
              </li>
              <li className='nav-item active'>
                <Link to='/dashboard'>
                <span className='nav-link' aria-current='page' href='#'>Dashboard</span>
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Features</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Pricing</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
