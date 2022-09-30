import React from 'react'
import RightBar from './RightBar'
import styles from "./Project.module.css";
import LeftSidebar from './LeftSidebar';
import ToolsNavbar from '../../Components/ToolsNavbar';
const Project = () => {

  return (

    <div className={styles.ProjectBodyBox} >

     <ToolsNavbar/>
     <LeftSidebar/>
    </div>
  )
}

export default Project