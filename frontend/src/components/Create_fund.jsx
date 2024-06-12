import React from 'react'
import Header from "./Header.jsx"
import {Link} from "react-router-dom"
import { FaSuitcaseMedical } from "react-icons/fa6";

function Create_fund() {
  return (
    <div>
        <Header/>
        <div className='fixed h-screen w-screen top-0 left-0 z-[-1]'>
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_30%_80%_at_50%_40%,rgba(120,119,198,0.5),rgba(255,255,255,0))]"></div>
        </div>

        <div className='w-screen h-screen flex flex-col justify-center items-center text-[12px] gap-2'>
          <div className='lg:w-[28%] w-[45%]  h-[30px]  rounded-[10px] flex justify-between p-[1px] '>
              <select className='w-[30%] h-[100%] border-solid border-[1px]   rounded-[10px] p-1'>
                 <option  className='font-serif'>English</option>
                 <option  className='font-serif'>Hindi</option>
                 <option  className='font-serif'>Chinese</option>
              </select>
              <div className='flex w-[40%]     justify-center items-center gap-2'>
                   <div className='flex items-center'><button className='w-[15px] h-[15px] rounded-[10px] bg-white  border-solid border-[2px] border-purple-800'></button></div>
                   <div className='flex items-center'><button className='w-[15px] h-[15px] rounded-[10px] bg-white border-solid border-[2px] border-purple-800'></button></div>
                   <div className='flex items-center'><button className='w-[15px] h-[15px] rounded-[10px] bg-white border-solid border-[2px] border-purple-800'></button></div>
              </div>
          </div>
          <div className='flex  flex-col lg:w-[28%] w-[45%] h-[65%] bg-white shadow-md rounded-[5px] p-1 lg:p-3 gap-1 lg:gap-2'>
            <div className='flex justify-center items-center text-center'><p className='font-bold'>Tell us more about your Fundraiser</p></div>
            <hr className='border-solid border-[1px] border-black'></hr>
            <div className='flex justify-center items-center gap-1 lg:gap-2'><div className='text-red-500'><FaSuitcaseMedical /></div><p>Raising funds for <span className='font-bold'>Medical Treatment</span> purpose</p></div>
            <div className='flex flex-col items-start'>
               
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input placeholder='How much do you want to raise?' className='w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%]'>
                     <input placeholder='The Patient is my...' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input placeholder='Your Education Qualification' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input placeholder='Your Employment Status' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                    <input placeholder='Your Mobile No.' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                    <input placeholder='How did you first hear about Dono?' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-3'>
                <div><p className='text-[14px]'>Add fundraiser image/video</p></div>
                <div className='flex items-center justify-center border-solid border-black border-[1px]  rounded-[20px] '><input className='rounded-[20px] outline-none text-[8px] lg:text-[10px] text-blue-600 font-serif'  type="file"></input></div>
            </div>
            <div className='flex items-center justify-center '><button className='border-solid border-blue-600 border-[1px] p-2 mt-3   w-[80%] rounded-[20px] bg-blue-500 text-white text-[10px]'>Save and Continue</button></div>
          </div>
        </div>
    </div>
  )
}

export default Create_fund