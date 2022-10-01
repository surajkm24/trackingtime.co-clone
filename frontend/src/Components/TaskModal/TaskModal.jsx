import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
    Flex,
    color,
  } from '@chakra-ui/react'
  import { Textarea } from '@chakra-ui/react'
  import styles from "./Header.module.css"
import Inp from './inp/Inp'
import Set from './R-sec/Set'
import ProjAdd from './projAdd/ProjAdd'
import Down from './D-Section/Down'

const TaskModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <Box className={styles.header}>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size= "md"
        >
          <DrawerOverlay />
          <DrawerContent
          bg={'#2a313c'}
          mt={40}
          >
            {/* right Section */}
            <DrawerCloseButton color={'white'}/>
            {/* here comes the head */}
            <DrawerHeader display={"flex"}>
                <Inp/>  
            </DrawerHeader>
            {/* <hr /> */}
            <DrawerBody>
                <Input placeholder='Task name' borderWidth={".3px"}/>
                <br />
                <br />
                <Textarea color={'white'} placeholder={'Add Details...'}/>
                <br /><br />
                <ProjAdd/>
                <Down/>
                <br />

            </DrawerBody>
  
            {/* <DrawerFooter>

            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </Box>
)
}

export default TaskModal