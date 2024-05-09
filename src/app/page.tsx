"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar'
import Homepage from '../../component/homepage'
import Footer from '../../component/footer'
import Image from 'next/image'
import loader from '../../public/TroniQue (1) 1.svg'
import './page.css'


const Page = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Image src={loader} alt='loading' className='image'></Image>
        </div>
      ) : (
        <div className="main-content">
          <Navbar />
          <Homepage />
          <Footer />
        </div>
        )
      }
    </>
  )
}

export default Page
