import React from 'react'
import { Link } from 'react-router-dom'
import StudentCorner from '../components/StudentCorner'

const Home = () => {
  return (
    <>
        <StudentCorner img={"images/student-corner.png"} pagelink={"/stregis"}/>
        <div className="right_menu w-[250px]">
            <StudentCorner className='menu_bar' img={"https://mechomotive.com/wp-content/uploads/2021/07/Modren-Tech.jpg"} pagelink={"/"}/>
            <div className="drop_down hidden list-none cursor-pointer">
                <Link to={`/studetail/${"Computer"}`}>
                    <li>Computer</li>
                </Link>
                <Link to={`/studetail/${"Civil"}`}>
                <li>Civil</li>
                </Link>
                <Link to={`/studetail/${"Electrical"}`}>
                    <li>Electrical</li>
                </Link>
                
            </div>
        </div>
      
    </>
  )
}

export default Home