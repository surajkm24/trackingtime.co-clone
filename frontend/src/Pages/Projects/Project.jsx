import React from 'react'
import RightBar from './RightBar'
import styles from "./Project.module.css";
import Leftbar from './Leftbar';
import LeftSidebar from './LeftSidebar';
const Project = () => {

  return (

    <div className={styles.ProjectBodyBox} >
     {/* <Leftbar /> */}
     <LeftSidebar/>
    </div>
  )
}

export default Project