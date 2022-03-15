import React from 'react'
import { Link } from 'react-router-dom'
import StudentCorner from '../components/StudentCorner'

const Home = () => {
  return (
    <>
        <StudentCorner img={"images/student-corner.png"} pagelink={"/stregis"}/>
        <div className="right_menu w-[250px]">
            <StudentCorner className='menu_bar' img={"https://mechomotive.com/wp-content/uploads/2021/07/Modren-Tech.jpg"} pagelink={"/"}/>
            <div className="drop_down hidden list-none cursor-pointer bg-gradient-to-t from-[#ffffff] to-[#ffc6c6] mb-[30px]">
                <Link to={`/studetail/${"Computer"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] hover:duration-1000 font-semibold text-[white]'>Computer</li>
                </Link>
                <Link to={`/studetail/${"Civil"}`}>
                <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[white] hover:duration-1000'>Civil</li>
                </Link>
                <Link to={`/studetail/${"Electrical"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[white] hover:duration-1000'>Electrical</li>
                </Link>
                <Link to={`/studetail/${"Electronics"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[white] hover:duration-1000'>Electronics</li>
                </Link>
                <Link to={`/studetail/${"Power"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>Power</li>
                </Link>
                <Link to={`/studetail/${"ENVT"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>ENVT</li>
                </Link>
                <Link to={`/studetail/${"IPCT"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>IPCT</li>
                </Link>
                <Link to={`/studetail/${"Automobile"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>Automobile</li>
                </Link>
                
            </div>
        </div>
      
    </>
  )
}

export default Home