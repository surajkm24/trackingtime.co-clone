import React, { useEffect } from 'react'
import styles from "./Project.module.css";
import LeftSidebar from './LeftSidebar';
import ToolsNavbar from '../../Components/ToolsNavbar';
import { useState } from 'react';
import { getData, postData } from '../../Components/Function/Function';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext.jsx';
import NavProject2 from '../../Components/NavProject2/NavProject2';
import { Box, Flex } from '@chakra-ui/react';
import SingleProHeader from '../../Components/SingleProHeader/SingleProHeader';

const Project = () => {
  const [data, setData] = useState([]);
  const [singleProject, setSingleProject] = useState({});

  const { token } = useContext(AuthContext);
  const getProjects = (token) => {
    console.log('getProjects')
    getData(token).then((res) => {
      console.log(res+"hello")
      setSingleProject(res[0] || {});
      setData(res || [])
    }).catch((e) => {
      console.log(e);
    })
  }

  const addProject = (params) => {
    postData(token, params).then((res) => {
      setData([...data, res])
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
      <Flex>
      <LeftSidebar addProject={addProject} data={data} singleProject={singleProject} setSingleProject={setSingleProject} />
      <Box>
        <SingleProHeader singleProject={singleProject}/>
         <NavProject2/>
      </Box>
      
      </Flex>
    
     
    </div>
  )
}

export default Project