import React from 'react'
import "./Containers.css"
import Post from '../Post/Post'
import SideBar from '../SideBar/SideBar'
import RightBar from '../RightBar/RightBar'
import { data,data2 } from '../../assets/Data'



const Containers = ({bgColor, color}) => {
  return (
    <>
        <div className="container" >
        <div className="side-bar"><SideBar bgColor={bgColor} color={color}/></div>

      <div className="post-section">
        {data.map((d)=>(
          <Post key={d.id} data={d} bgColor={bgColor} color={color} />
        ))}
      </div>
      
      <div className="right-bar">
        {data2.map((d) =>(
          <RightBar key ={d.id} data2={d}  />
        ))}
      </div>
      </div>
    </>
    
  )
}

export default Containers