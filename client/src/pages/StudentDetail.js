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
    <div>{tech} Technology Students data
    {filterstudata.map((s)=>{
        return <p>{s.studentName}</p>
    })}
    </div>
  )
}

export default StudentDetail