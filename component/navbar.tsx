'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/TroniQue (1) 1.svg'
import '../styles/navbar.css'
import Link from 'next/link';
import ConnectWallet from '../src/TronWallet/TronConnect'


const Navbar = () => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  return (
    <div className='navbar'>
        <Link href="/">
            <Image src={logo} alt='logo'></Image>
        </Link>
      <ConnectWallet/>
    </div>
  )
}

export default Navbar
