import React, { useEffect } from 'react'
import styles from "./Project.module.css";
import LeftSidebar from './LeftSidebar';
import ToolsNavbar from '../../Components/ToolsNavbar';
import { useState } from 'react';
import { getData, postData } from '../../Components/Function/Function';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext.jsx';

const Project = () => {
  const [data, setData] = useState([]);
  const { token } = useContext(AuthContext);
  const getProjects = (token) => {
    getData(token).then((res) => {
      console.log(res)
      setData(res)
    }).catch((e) => {
      console.log(e);
    })
  }

  const addProject = (params) => {
    postData(token, params).then((res)=>{
      setData([...data,res])
    })
  }

  useEffect(() => {
    getProjects(token);
  }, []);

  useEffect(()=>{
    console.log(data);
  },[data])

  return (

    <div className={styles.ProjectBodyBox} >

      <ToolsNavbar />
      <LeftSidebar addProject={addProject} />
    </div>
  )
}

export default Project