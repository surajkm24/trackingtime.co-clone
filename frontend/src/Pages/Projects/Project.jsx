import React, { useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import LeftSidebar from './LeftSidebar';
import ToolsNavbar from '../../Components/ToolsNavbar';
import { useState } from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex, Slide } from '@chakra-ui/react';
import { SingleProjectTask } from './SingleProjectTask';
import NoProject from './NoProject';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAPI, createProject, deleteProjectAPI, deleteTaskAPI, getAllProjectsAPI, getAllTasksAPI, patchProjectAPI, patchTaskAPI } from '../../Redux/Projects/project.actions';

const Project = () => {
  const [play, setPlay] = useState(0);
  const [alertMsg, setAlertMsg] = useState(false);
  const toast = useToast()
  const dispatch = useDispatch();
  const { token } = useSelector(store => store.auth)
  const { projects: data, selectedProject: singleProject } = useSelector(store => store.project)
  const projectAPI = () => {
    dispatch(getAllTasksAPI(token, singleProject._id))
  }

  const getProjects = (token, id) => {
    dispatch(getAllProjectsAPI(token))
  }

  const addProject = (params) => {
    dispatch(createProject(token, params)).then((res) => {
      toast({
        title: 'Project created.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }).catch((e) => {
      setAlertMsg(true);
      setTimeout(() => {
        setAlertMsg(false)
      }, 4000)
    })
  }

  const deleteProject = (id) => {
    dispatch(deleteProjectAPI(token, id)).then((res) => {
      toast({
        title: 'Project deleted!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    })
  }

  const updateDuration = (time) => {
    let params = { duration: singleProject.duration + time };
    let id = singleProject._id;
    console.log((+time) + (+singleProject.duration), 'duration')
    if (!id) return;
    setTimeout(() => {
      dispatch(patchProjectAPI(token, id, params))
    }, 1000)
  }

  const addProjectTask = (params) => {
    dispatch(addTaskAPI(token, singleProject._id, params)).then((res) => {
      toast({
        title: 'Task added.',
        status: 'success',
        variant: "subtle",
        duration: 3000,
        isClosable: true,
      })
    })
  }

  const updateProjectTask = (status, id) => {
    let params = { status: status };
    dispatch(patchTaskAPI(token, id, params)).then((res) => {
      projectAPI();
      toast({
        title: 'Task updated!',
        status: 'info',
        variant: "subtle",
        duration: 3000,
        isClosable: true,
      })
    })
  }

  const deleteProjectTask = (id) => {
    dispatch(deleteTaskAPI(token, id)).then((res) => {
      toast({
        title: 'Task deleted!',
        status: 'error',
        variant: "subtle",
        duration: 3000,
        isClosable: true,
      })
    })
  }

  useEffect(() => {
    getProjects(token);
  }, []);

  useEffect(() => {
    console.log(singleProject, 'check')
    if (singleProject._id) {
      projectAPI();
    }
  }, [singleProject])

  return (

    <Box bg='white' h='100vh' overflow='hidden'>
      <ToolsNavbar play={play} setPlay={setPlay} updateDuration={updateDuration} />
      <Flex w='100%'>
        <LeftSidebar deleteProject={deleteProject} addProject={addProject} data={data} singleProject={singleProject} alertMsg={alertMsg} />

        {data.length === 0 ? <NoProject /> :
          <SingleProjectTask deleteProjectTask={deleteProjectTask} updateProjectTask={updateProjectTask} singleProject={singleProject}
            play={play} setPlay={setPlay} addProjectTask={addProjectTask} />
        }
      </Flex>
    </Box>
  )
}

export default Project