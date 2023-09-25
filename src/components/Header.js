import React from 'react'
import GDSC_LOGO from '../assets/gdsc-logo.png'

const Header = () => {
  return (
    <>
    <div className="flex justify-center items-center">
        <img src={GDSC_LOGO} alt="GDSC-LOGO" height={30} width={30} className="m-2" />
        <h1 className="font-bold text-2xl">GDSC IIIT LUCKNOW</h1>
      </div>
      <h2 className="text-center text-xl">LEADERBOARD</h2>
    </>
  )
}

export default Header