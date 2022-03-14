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
    }
  return (
    <>
    <div className="container">
      <div className="title">
        <p>শিক্ষার্থীর তথ্য সংগ্রহ ফরম</p>
      </div>
    <label>Student Name</label>
 <br/>

      <input type="text" onChange={(e)=>setstuname(e.target.value)}/>  
      <br/>
      <label>Session</label>
      <br/>
      <input type="text" onChange={(e)=>setsession(e.target.value)}/> 
      <br/>
      <label>Semester</label> 
      <br/>
      <select onChange={(e)=>setsemester(e.target.value)}>
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
      <br/>
      <label>Technology</label> 
      <br/>
      <select onChange={(e)=>settechno(e.target.value)}>
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
      <br />
      <label>Gender</label> 
      <br/>
      <select onChange={(e)=>setgender(e.target.value)}>
        <option>Gender</option>
        <option>Boy</option>
        <option>Girl</option>
    </select>
      <br />
      <label>Shift</label> 
      <br/>
      <select onChange={(e)=>setshift(e.target.value)}>
        <option>Shift</option>
        <option>1st</option>
        <option>2nd</option>
    </select>
    <br />
    <button onClick={submit}>Submit</button>
    </div>
      
    </>
  )
}

export default StuRegistation