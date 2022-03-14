import React, { useState } from 'react'
import axios from 'axios'
const StuRegistation = () => {
    const [stuname, setstuname] = useState('')
    const [session, setsession] = useState('')
    const [semester, setsemester] = useState('')
    const [techno, settechno] = useState('')
    const [gender, setgender] = useState('')
    const [shift, setshift] = useState('')
    const submit =()=>{
        const data ={
            stuname,
            session,
            semester,
            techno,
            gender,
            shift
        }
        console.log(data)
        axios.post('http://localhost:3002/api/postRegist',data)
        alert('Thanks for contacting us! We will be in touch with you shortly.')
    }
  return (
    <>
    <div className="container border-[1px] border-[#6db700] bg-gradient-to-t from-[#ededed] to-[#fefefe] rounded-[5px] max-w-[90%] md:max-w-[80%] m-[30px_auto]">
      <div className="regcontain p-[20px] ]">
      <div className="title bg-[#6db700] p-[10px] rounded-[5px_5px_0px_0px] text-center text-[white]">
        <p>শিক্ষার্থীর তথ্য সংগ্রহ ফরম</p>
      </div>
      <div className="from">
        <div className="stuname p-[10px_0px]">
          <p className='mb-[5px] font-semibold text-[#333]'>Student Name</p>
          <input className='border-[1px] border-[#d3d1d1] w-[60%] p-[5px]' type="text" onChange={(e)=>setstuname(e.target.value)}/>  
        </div>
        <div className="stusession p-[8px_0px]">
          <p className='mb-[5px] font-semibold text-[#333]'>Session</p>
          <input className='border-[1px] border-[#d3d1d1] w-[60%] p-[5px]' type="text" onChange={(e)=>setsession(e.target.value)}/> 
        </div>
      <div className="stusemester p-[8px_0px]">
        <p className='mb-[5px] font-semibold text-[#333]'>Semester</p> 
        <select className='border-[1px] border-[#d3d1d1] w-[60%] p-[5px] ' onChange={(e)=>setsemester(e.target.value)}>
          <option>Semester</option>
          <option>1st Semester</option>
          <option>2nd Semester</option>
          <option>3rd Semester</option>
          <option>4th Semester</option>
          <option>5th Semester</option>
          <option>6th Semester</option>
          <option>7th Semester</option>
          <option>8th Semester</option>
        </select> 
      </div>
      <div className="stutech p-[8px_0px]">
        <p className='mb-[5px] font-semibold text-[#333]'>Technology</p> 
        <select className='border-[1px] border-[#d3d1d1] w-[60%] p-[5px] ' onChange={(e)=>settechno(e.target.value)}>
          <option>Technology</option>
          <option>Computer</option>
          <option>Civil</option>
          <option>Mechanical</option>
          <option>Electrical</option>
          <option>Electronics</option>
          <option>Power</option>
          <option>ENVT</option>
          <option>IPCT</option>
          <option>Automobile</option>
          <option>RAC</option>
        </select> 
      </div>
      
      <div className="stugend p-[8px_0px]">
        <p className='mb-[5px] font-semibold text-[#333]'>Gender</p> 
        <select className='border-[1px] border-[#d3d1d1] w-[60%] p-[5px] ' onChange={(e)=>setgender(e.target.value)}>
          <option>Gender</option>
          <option>Boy</option>
          <option>Girl</option>
      </select>
      </div>
     <div className="stushift p-[8px_0px]">
      <p className='mb-[5px] font-semibold text-[#333]'>Shift</p> 
        <select className='border-[1px] border-[#d3d1d1] w-[60%] p-[5px] ' onChange={(e)=>setshift(e.target.value)}>
          <option>Shift</option>
          <option>1st</option>
          <option>2nd</option>
      </select>
     </div>
        <button className='p-[10px_15px] border-[1px] border-[#cfcccc] m-[10px_0px] font-semibold text-[#333]' onClick={submit}>Submit</button>
     </div>
    </div> 
  </div>  
    </>
  )
}

export default StuRegistation