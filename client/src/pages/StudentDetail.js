import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const StudentDetail = () => {
    const {tech} = useParams()
    const [studata, setstudata] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3002/api/read').then((resposn)=>{
            return setstudata(resposn.data)
        })
    },[])
    const filterstudata = studata.filter((c)=>c.technology===tech)
  return (
    <>
    <div className="container border-[1px] border-[#6db700] bg-gradient-to-t from-[#ededed] to-[#fefefe] rounded-[5px] max-w-[90%] md:max-w-[80%] m-[30px_auto] p-[15px]">
    <div className="title bg-[#6db700] p-[10px] rounded-[5px_5px_0px_0px] text-center text-[white]">
        <p>{tech} বিভাগের ছাত্র-ছাত্রী</p>
      </div>
        <div className="hdtitle mt-[10px] bg-gradient-to-t from-[#c2f0ea] to-[#fefefe]">
          <ul className='flex justify-around'>
            <li className='p-[10px] font-semibold '>Student Name</li>
            <li className='p-[10px] font-semibold'>Semester</li>
            <li className='p-[10px] font-semibold'>Shift</li>
            <li className='p-[10px] font-semibold'>Session</li>
            <li className='p-[10px] font-semibold'>Gender</li>
          </ul>
        </div>
        <div className="stu_data">
          {filterstudata.map((s)=>{
              return <ul className='flex justify-around bg-[#ffffff] m-[5px_0px]'>
                        <li className='p-[10px]'>{s.studentName}</li>
                        <li className='p-[10px]'>{s.semester}</li>
                        <li className='p-[10px]'>{s.shift}</li>
                        <li className='p-[10px]'>{s.session}</li>
                        <li className='p-[10px]'>{s.gender}</li>
                    </ul>
          })}
          
        </div>
    </div>
    </>
  )
}

export default StudentDetail