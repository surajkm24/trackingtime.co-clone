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


const NavProject2 = () => {
  return (
    <Box className={styles.NavPro2Container}>
        <Flex className={styles.nav}>
           <NavLink to="/list" className={({isActive})=> isActive? styles.active : styles.default}>List</NavLink>
           <NavLink to="/Board" className={({isActive})=> isActive? styles.active  : styles.default}>Board</NavLink>
           <NavLink to="/timeline" className={({isActive})=> isActive? styles.active  : styles.default}>Timeline</NavLink>
           <NavLink to="/report" className={({isActive})=> isActive? styles.active  : styles.default}>Report</NavLink>
           <NavLink to="/notes" className={({isActive})=> isActive? styles.active  : styles.default}>Notes</NavLink>
           <NavLink to="/files" className={({isActive})=> isActive? styles.active : styles.default}>Files</NavLink>

           <Flex className={styles.menuRight}>
            {/* open task */}
              {/* <Box> */}
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} w={"120px"} h={"30px"} fontSize={"13px"} fontWeight={"bold"} mt={"12px"} backgroundColor={"#343D4B"} color={"white"}>
                        {isOpen ? 'Open tasks' : 'Open tasks'}
                      </MenuButton>
                      <MenuList  backgroundColor={"#343D4B"} color={"white"}>
                        <MenuItem>All tasks</MenuItem>
                        <MenuItem onClick={() => alert('Kagebunshin')}>open tasks</MenuItem>
                      </MenuList>
                    </>
                  )}    
                </Menu>
              {/* </Box> */}

              {/* add task */}
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}  w={"100px"} h={"30px"} fontSize={"13px"} mt={"12px"} fontWeight={"bold"} backgroundColor={"#343D4B"} color={"white"}>
                        {isOpen ? '+ Tasks' : '+ Tasks'}
                      </MenuButton>
                      <MenuList  backgroundColor={"#343D4B"} color={"white"}>
                        <MenuItem>Add task list</MenuItem>
                        <MenuItem onClick={() => alert('Kagebunshin')}>Add multiple tasks</MenuItem>
                      </MenuList>
                    </>
                  )}    
                </Menu>


           </Flex>
        </Flex>
        <Nav2Space/>
    </Box> 
  ) 
}

export default NavProject2
