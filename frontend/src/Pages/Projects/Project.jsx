import React, { useEffect } from 'react'
import styles from "./Project.module.css";
import LeftSidebar from './LeftSidebar';
import ToolsNavbar from '../../Components/ToolsNavbar';
import { useState } from 'react';
import { getData, postData } from '../../Components/Function/Function';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext.jsx';
import Nav2Space from '../NotesComponent/Nav2Space.jsx';
import NavProject2 from '../../Components/NavProject2/NavProject2.jsx'

const Project = () => {
  const [data, setData] = useState([]);
  const [singleProject, setSingleProject] = useState({});

  const { token } = useContext(AuthContext);
  const getProjects = (token) => {
    getData(token).then((res) => {
      console.log(res)
      setSingleProject(res[0]||{});
      setData(res||[])
    }).catch((e) => {
      console.log(e);
    })
  }

  const addProject = (params) => {
    postData(token, params).then((res) => {
      setData([...data, res])
      setSingleProject(res);
    })
  }

  useEffect(() => {
    getProjects(token);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data])

  return (

    <div className={styles.ProjectBodyBox} >

      <ToolsNavbar />
      <div style={{display:"flex"}}>
      <LeftSidebar addProject={addProject} data={data} singleProject={singleProject} setSingleProject={setSingleProject} />
      {/* <NavProject2/>
      <Nav2Space /> */}
      </div>
    </div>
  )
}

export default Project