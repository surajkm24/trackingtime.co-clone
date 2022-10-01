import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Input
  } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


const AddBlock = () => {

  const handleAddHeading = ()=>{
      return (
        <Box>
          <Input placeholder='heading'></Input>
        </Box>
      )
  }

  return (
     <Box>
      <Menu>
        <MenuButton as={Button} color={"grey"} border={"1px"} padding="-10" backgroundColor={"none"} fontSize={"20px"}>
            +
        </MenuButton>
        <MenuList>
        {/* <MenuGroup title='Profile'> */}
        <MenuItem icon={<AddIcon />}  onClick={handleAddHeading}>
          
             Headings
        </MenuItem>
        <MenuItem icon={<AddIcon />}>Paragraph </MenuItem>
        {/* </MenuGroup> */}
        {/* <MenuDivider /> */}
        {/* <MenuGroup title='Help'> */}
        {/* <MenuItem>Docs</MenuItem>
        <MenuItem>FAQ</MenuItem> */}
        {/* </MenuGroup> */}
        </MenuList>
      </Menu>
     </Box>
  )
}

export default AddBlock
