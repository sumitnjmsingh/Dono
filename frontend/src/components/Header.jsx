import {React,useState} from 'react'
import { FaSearch } from "react-icons/fa";
import {Link,useNavigate} from "react-router-dom"

function Header() {
  const navigate=useNavigate();

  const handleoptionclick1=(event)=>{
    const selectedvalue=event.target.value;
    navigate(`/${selectedvalue}`)
}

  // const [selectedoption,setselectedoption]=useState("")
  const handleoptionclick2=(event)=>{
      const selectedvalue=event.target.value;
      navigate(`/${selectedvalue}`)
  }

  return (
    <div className='sticky top-0 left-0 z-[4] '>
        <div className='flex flex-wrap  w-screen  justify-around items-center bg-slate-300 p-1'>
            <div><h1 className='text-black font-serif text-[20px]  font-light lg:tracking-[20px] tracking-[10px]  '><span className='text-[25px] font-bold border-solid border-purple-600 border-[2px] rounded-[100px] pl-4 mx-1'>D</span>oNO</h1></div>
            <div className='flex justify-between gap-4 lg:text-[15px] text-[10px]'>
                <Link to="/Donation_feed"><h2 className='font-serif'>Browse Fundraisers</h2></Link>
                <div><select onChange={handleoptionclick1} className='font-serif bg-transparent'>
                            <option  value='Fundraise For'disabled selected  hidden>Fundraise For</option>
                            <option value="create_fund">Medical Treatment</option>
                            <option value="NGO_Charity">NGO/Charity</option>
                            <option value="Other_Cause">Other Cause</option>
                     </select>
                  </div>
                <Link to="/Donation_feed/working_procedure"><h2 className='font-serif'>How It Works </h2></Link>
                <div className='flex items-center'><div className='pr-2'><FaSearch /></div><h2 className='font-serif'>Search</h2></div>
            </div>
            <div className='flex items-center gap-2 lg:text-[15px] text-[10px]'><button className='border-solid border-blue-700 border-[1px] rounded-[30px] p-2 text-blue-700 font-serif'>Start a Fundraiser</button><div ><img className='w-[40px] h-[40px] rounded-full ' src="profile1.jpg" ></img></div><div ><select onChange={handleoptionclick2} className='border-solid border-blue-600 border-[1.5px] rounded-[30px] p-2 bg-transparent'>
                 
                 <option value="Sumit Singh" className='font-bold'>Sumit Singh</option>
                 <option value="">Register</option>
                 <option value="View Profile" >View Profile</option>
                 <option value="My Fundraisers">My Fundraisers</option>
                 <option value="My Donations">My Donations</option>
                 <option value="View My Impact">View My Impact</option>
                 <option value="Get us on Whatsapp" className='text-green-600 font-bold'>Get us on Whatsapp</option>
                 <option value="Logout">Logout</option>
              </select></div></div>
        </div>
    </div>
  )
}

export default Header