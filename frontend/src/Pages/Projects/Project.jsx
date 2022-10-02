import React, { useEffect } from 'react'
import styles from "./Project.module.css";
import LeftSidebar from './LeftSidebar';
import ToolsNavbar from '../../Components/ToolsNavbar';
import { useState } from 'react';
import { getData, postData, editData, deleteData, addTask, updateTask, deleteTask } from '../../Components/Function/Function';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext.jsx';
// import Nav2Space from '../NotesComponent/Nav2Space.jsx';
// import NavProject2 from '../../Components/NavProject2/NavProject2.jsx'
import NavProject2 from '../../Components/NavProject2/NavProject2';
import { Box, Flex } from '@chakra-ui/react';
import SingleProHeader from '../../Components/SingleProHeader/SingleProHeader';
import { SingleProjectTask } from './SingleProjectTask';
import { getProject } from '../../Components/ProjectReport/Report.Actions';

const Project = () => {
  const [projectData, setProjectData] = useState({ data: {}, completedTasks: 0, hoursCompleted: "", completedPercent: 0 });
  const [data, setData] = useState([]);
  const [singleProject, setSingleProject] = useState({});
  const [play, setPlay] = useState(0)

  const { token } = useContext(AuthContext);
  const projectAPI = () => {
    getProject(token, singleProject._id)
      .then((res) => {
        let completedTasks = 0;
        let hoursCompleted = res.duration < 60 ?
          res.duration + "s" :
          Math.floor(res.duration / 3600) + "h:" +Math.floor((res.duration % 3600) / 60)+'m'

        let completedPercent = Math.floor((res.duration / (res.estimatedTime * 3600)) * 100);
        console.log(res, 3, 'pr3')
        // console.log(3)
        setProjectData({
          ...projectData,
          data: res,
          completedTasks,
          hoursCompleted,
          completedPercent
        });
      }).catch(e => console.log(e, 'error'))
  }
  const getProjects = (token, id) => {
    getData(token).then((res) => {
      console.log(res, 'getProjects')
      if (id) {
        res.forEach((ele) => {
          if (ele._id === id) {
            setSingleProject(ele);
          }
        })
      }
      else {
        setSingleProject(res[0] || {});
      }
      setData(res || [])
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

  const deleteProject = (id) => {
    deleteData(token, id).then((res) => {
      getProjects(token);
    })
  }
  const updateDuration = (time) => {
    let params = { duration: singleProject.duration + time };
    let id = singleProject._id;
    console.log((+time) + (+singleProject.duration), 'duration')
    //  alert(params+" "+id)
    setTimeout(() => {
      editData(token, id, params).then((res) => {
        getProjects(token, id);
      })
    }, 1000)
  }

  const addProjectTask = (params) => {
    addTask(token, singleProject._id, params).then((res) => {
      projectAPI();
    })
  }

  const updateProjectTask = (status, id) => {
    let params = { status: status };
    updateTask(token, id, params).then((res) => {
      projectAPI();
    })
  }

  const deleteProjectTask = (id) => {
    deleteTask(token, id,singleProject._id).then((res) => {
      console.log('deleted task 2')
      projectAPI();
    })
  }

  useEffect(() => {
    getProjects(token);
  }, []);

  useEffect(() => {
    projectAPI();
  }, [singleProject])

  return (

    <div className={styles.ProjectBodyBox} >

      <ToolsNavbar play={play} setPlay={setPlay} updateDuration={updateDuration} />
      <Flex>
        <LeftSidebar deleteProject={deleteProject} addProject={addProject} data={data} singleProject={singleProject} setSingleProject={setSingleProject} />
        <SingleProjectTask deleteProjectTask={deleteProjectTask} updateProjectTask={updateProjectTask} singleProject={singleProject} play={play} setPlay={setPlay} projectData={projectData} addProjectTask={addProjectTask} />
      </Flex>


    </div>
  )
}

export default Project