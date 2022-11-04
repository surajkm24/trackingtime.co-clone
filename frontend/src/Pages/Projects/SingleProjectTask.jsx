import NavProject2 from '../../Components/NavProject2/NavProject2';
import { Box } from '@chakra-ui/react';
import SingleProHeader from '../../Components/SingleProHeader/SingleProHeader';
import { useSelector } from 'react-redux';

export const SingleProjectTask = ({ deleteProjectTask, singleProject, play, setPlay, projectData, addProjectTask, updateProjectTask }) => {
    const { token } = useSelector(store => store.auth)
    return (
        <Box flex='1' >
            <Box display='flex' h='100%' flexDirection={'column'}>
                <SingleProHeader singleProject={singleProject} projectData={projectData} play={play} setPlay={setPlay} />
                <NavProject2 deleteProjectTask={deleteProjectTask} addProjectTask={addProjectTask} projectData={projectData} updateProjectTask={updateProjectTask} />
            </Box>
        </Box>
    )
}

// 00:01/01:00