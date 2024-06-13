import React from 'react'
import {Link} from "react-router-dom"

function Donate_card() {
  return (
    <div>
        <div className='flex flex-col p-3 border-solid border-black border-[2px] rounded-[10px] gap-4 bg-slate-200 shadow-2xl'>
            <div className=' flex justify-center items-center'><img className='w-[80%] h-[30%]' src="./girl1.jpeg"></img></div>
            <div className='flex flex-col'>
                <div><h1 className='text-[15px] font-bold'>Save Our Premature Newborn Twins By Providing..</h1></div>
                <div className='flex items-center gap-4 mt-1'>
                    <div className=' flex justify-center items-center '><img className='w-[40px] h-[40px] rounded-full' src="./profile1.jpg"></img></div>
                    <div><p>by Sumit Singh</p></div>
                </div>
                <div className='flex flex-col'>
                     <h1 className='text-slate-500'><span className='font-bold text-black '>₹20,73,346</span>  raised</h1>
                     <p className='text-slate-500'>Last donation 4 hours ago</p>
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                <div className='flex justify-center items-center p-1'><button className='rounded-[20px] p-2 border-solid border-black border-[2px]'>Share</button></div>
                <Link to="/Payment" className='flex justify-center items-center p-1'><button className='rounded-[20px] bg-blue-400 p-2 font-serif text-white'>Donate</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Donate_card