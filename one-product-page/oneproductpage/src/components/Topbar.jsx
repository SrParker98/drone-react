import React from 'react'
import './style/styles.scss' 

export default function Topbar() {
  return (
    <div>
        <nav className='top-bar'>
            <ul className='top-bar-ul'>
                <li className='nav-li'>News</li>
                <li className='nav-li'>Suscription</li>
                <li className='nav-li'>Shop</li>
            </ul>
        </nav>
    </div>
  )
}
