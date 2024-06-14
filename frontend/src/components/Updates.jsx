import React from 'react'
import Header from "./Header.jsx"
import Footer2 from "./Footer2.jsx"
import { GiShiningHeart } from "react-icons/gi";
import Swiper2 from "./Swiper2.jsx"

function Updates() {
  return (
    <div >
        
        <Header/>
        <div className='w-screen relative'>
               <div className='fixed top-0 left-0 h-screen z-[-1] w-screen bg-[#e2e3e4]'></div>
                <div className='w-[80%]  bg-blue-200 mx-auto flex flex-wrap justify-center rounded-[50px] m-3 p-2'>
                    <div className='lg:w-[40%] w-[80%] flex  flex-col gap-3 justify-center p-2'>
                        <div className='flex justify-start'><h1 className='font-bold lg:text-[40px] text-[20px] font-serif'>Become A Changemaker!</h1></div>
                        <div className='flex justify-start'><p className='lg:text-2xl text-xl font-thin'>Tap into the world of regular donations</p></div>
                        <div className='flex justify-between gap-3 text-center'>
                             <div className='flex flex-col items-center '>
                                <p className='lg:text-[25px] text-[15px] font-bold'>12.9K</p>
                                <p className='lg:text-[20px] text-[10px]'>Lives saved by Dono</p>
                             </div>
                             <div className='flex flex-col items-center'>
                                <p className='lg:text-[25px] text-[15px] font-bold' >1.2M</p>
                                <p className='lg:text-[20px] text-[10px]'>Donors</p>
                             </div>
                             <div className='flex flex-col items-center'>
                                <p className='lg:text-[25px] text-[15px] font-bold'>15.9K</p>
                                <p className='lg:text-[20px] text-[10px]'>Trusted Campaign</p>
                             </div>
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-[80%] flex items-center justify-center flex-col gap-5 p-2'>
                        <div className='h-[70%] w-[80%]  flex justify-center items-center p-3 '>
                             <video className='rounded-[35px] w-[300px]  h-[300px]' src="./video3.mp4 "  autoPlay loop muted/>
                        </div>
                        <div className='flex justify-center items-center w-[80%]'><button className='bg-blue-400 rounded-[10px] text-[15px] p-2 w-[100%]'>Make A Change</button></div>
                    </div>
                </div>
        </div>
        <div className='flex h-[100%]  w-[90%] mx-auto'><Swiper2/></div>
        <div className='flex w-screen flex-col px-2 m-3 '>
            <div className='flex  items-center justify-center gap-2'><p className='lg:text-[60px] text-[30px] font-bold'>Keep Spreading Love!</p><div className='text-red-500 text-[60px]'><GiShiningHeart /></div></div>
            <p className='lg:text-[30px] text-[20px] text-slate-500 flex justify-center'>With Dono’s Social Impact Plan</p>
        </div>
        <Footer2/>
    </div>
  )
}

export default Updates