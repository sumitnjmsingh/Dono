import React from 'react'
import Header from "./Header.jsx"
import {Link} from "react-router-dom"

function Create_fund() {
  return (
    <div>
        <Header/>
        <div className='fixed h-screen w-screen top-0 left-0 z-[-1]'>
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_30%_80%_at_50%_40%,rgba(120,119,198,0.5),rgba(255,255,255,0))]"></div>
        </div>
        <div></div>
    </div>
  )
}

export default Create_fund