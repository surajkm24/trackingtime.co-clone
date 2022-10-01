// import React from 'react'
// import RightBar from './RightBar'
// import styles from "./Project.module.css";
// import LeftSidebar from './LeftSidebar';
// import ToolsNavbar from '../../Components/ToolsNavbar';
// import { useState } from 'react';
// import { useContext } from 'react';
// import { AuthContext } from '../ContextAPI/AuthContext';
// import { getData } from '../../Components/Function/Function';
// import { useEffect } from 'react';
// const Project = () => {
//   const {token} = useContext(AuthContext)
//   const [data,setData] = useState([])

//   const displayData = ()=>{
//     // let [id] = token.split(":") 
//     getData(token).then((res)=>{
//       console.log(res)
//       setData(res);
//     })
//   }
//   console.log(data)

//   useEffect(()=>{
//     displayData();
//   },[])
   
//   return (

//     <div className={styles.ProjectBodyBox} >

//      <ToolsNavbar/>
//      <LeftSidebar/>
//     </div>
//   )
// }

// export default Project