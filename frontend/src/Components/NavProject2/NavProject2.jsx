import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Nav2Space from '../../Pages/NotesComponent/Nav2Space'
import styles from "../NavProject2/NavProject2.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import SingleProHeader from '../SingleProHeader/SingleProHeader';
import TaskModal from '../TaskModal/TaskModal.jsx'

const NavProject2 = ({ addProjectTask, projectData, updateProjectTask, deleteProjectTask }) => {
  return (

    <Box className={styles.NavPro2Container} flex='1'>
      {/* <SingleProHeader /> */}
      <Flex px='13px' className={styles.nav} justifyContent='space-between' alignItems='center' borderBottom='1px solid rgba(0,0,0,0.1)'>
        <Flex>
        {/* Use loop here if possible using an array*/}
          <NavLink to="/project/list" className={({ isActive }) => isActive ? styles.active : styles.default}><Text _hover={{ color: "black" }}>List</Text></NavLink>
          <NavLink to="/project/boards" className={({ isActive }) => isActive ? styles.active : styles.default}><Text _hover={{ color: "black" }}>Board</Text></NavLink>
          <NavLink to="/project/timeline" className={({ isActive }) => isActive ? styles.active : styles.default}><Text _hover={{ color: "black" }}>Timeline</Text></NavLink>
          <NavLink to="/project/report" className={({ isActive }) => isActive ? styles.active : styles.default}><Text _hover={{ color: "black" }}>Report</Text></NavLink>
          <NavLink to="/project/notes" className={({ isActive }) => isActive ? styles.active : styles.default}><Text _hover={{ color: "black" }}>Notes</Text></NavLink>
          <NavLink to="/project/files" className={({ isActive }) => isActive ? styles.active : styles.default}><Text _hover={{ color: "black" }}>Files</Text></NavLink>
        </Flex>
        <Flex gap='20px'>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}
                  w={"120px"} h={"30px"} fontSize={"12px"}
                  fontWeight={"bold"} backgroundColor={"rgba(0,0,0,0.09)"}
                  color={"#0a192f"} _hover={{ backgroundColor: "rgba(0,0,0,0.19)" }}>
                  {isOpen ? 'Open tasks' : 'Open tasks'}
                </MenuButton>
                <MenuList w='70px' fontSize='13px' backgroundColor={"white"} color={"#0a192f"}>
                  <MenuItem fontWeight={600} _hover={{ backgroundColor: "rgba(216,226,238)", color: "blue" }}>All tasks</MenuItem>
                  <MenuItem fontWeight={600} _hover={{ backgroundColor: "rgba(216,226,238)", color: "blue" }} >Open tasks</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          <Button h='30px' fontSize='12px' fontWeight={700} mr='-16px' px='8px' color='#0a192f' bg='rgba(0,0,0,0.09)' _hover={{ background: 'rgba(0,0,0,0.19)' }} borderRadius='4px 0px 0px 4px'>
            + Tasks
          </Button>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button}
                  h={"30px"} fontSize={"13px"} borderRadius='0px 4px 4px 0px'
                  fontWeight={"bold"} px='0px' backgroundColor={"rgba(0,0,0,0.09)"}
                  color={"#0a192f"} _hover={{ backgroundColor: "rgba(0,0,0,0.19)" }}>
                  <ChevronDownIcon px='0px' />
                </MenuButton>
                <MenuList w='70px' fontSize='13px' backgroundColor={"white"} color={"#0a192f"}>
                  <MenuItem fontWeight={600} _hover={{ backgroundColor: "rgba(216,226,238)", color: "blue" }}>Add task list</MenuItem>
                  <MenuItem fontWeight={600} _hover={{ backgroundColor: "rgba(216,226,238)", color: "blue" }} >Add multiple tasks</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>
      <TaskModal deleteProjectTask={deleteProjectTask} addProjectTask={addProjectTask} projectData={projectData} updateProjectTask={updateProjectTask} />
    </Box>
  )
}

export default NavProject2
