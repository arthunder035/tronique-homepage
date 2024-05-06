'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/TroniQue (1) 1.svg'
import '../styles/navbar.css'
import Link from 'next/link';


const Navbar = () => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  return (
    <div className='navbar'>
        <Link href="/">
            <Image src={logo} alt='logo'></Image>
        </Link>
    </div>
  )
}

export default Navbar
