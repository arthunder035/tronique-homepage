import Image from 'next/image'
import React from 'react'
import logo from '../public/TroniQue (1) 1.svg'
import '../styles/navbar.css'
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='navbar'>
        <Link href="/">
            <Image src={logo} alt='logo'></Image>
        </Link>
      <button className='wallet-button'>Connect Wallet</button>
    </div>
  )
}

export default Navbar
