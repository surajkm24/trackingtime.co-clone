import React, { useState } from 'react'
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
  useMenuState,
  Text,
  Checkbox,
  Popover, PopoverContent, PopoverBody, PopoverTrigger
} from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
// import styles from "./Header.module.css"
import Inp from './inp/Inp'
import Set from './R-sec/Set'
import ProjAdd from './projAdd/ProjAdd'
import Down from './D-Section/Down';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md'

const TaskModal = ({ addProjectTask, projectData, updateProjectTask, deleteProjectTask }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const [formData, setFormData] = useState({ taskName: "", description: "", status: false, estimatedTime: 0 })

  const handleSubmit = (e) => {
    e.preventDefault();
    addProjectTask(formData);
    onClose();
  }
  return (
    <Box p='10px 10px'>
      {projectData.data?.task?.map(({ taskId }) => {
        if (taskId === null) return <></>
        return <Box display='flex' alignItems='center' justifyContent='space-between' gap='20px' borderBottom='1px solid #374050' p='10px 15px' _hover={{ background: "#343d4b" }}>
          <Box display='flex' alignItems='center' gap='20px'>
            <Checkbox colorScheme='green' borderColor='#969BA6' isChecked={taskId.status} onChange={(e) => updateProjectTask(e.target.checked, taskId._id)} />
            <Text color='white' fontSize='13px' fontWeight='600'>{taskId.taskName}</Text>
          </Box>
          <Popover trigger='hover'>
            <PopoverTrigger>
              <Box color='white' fontWeight='800' w='20px' h='20px' cursor='pointer'>
                <span>...</span>
              </Box>
            </PopoverTrigger>
            <PopoverContent bg='#2a313c' w='200px' borderColor='#374050'>
              <PopoverBody fontWeight={600} fontSize='13px' color='white'>
                <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='5px 10px' _hover={{ background: "#343d4b" }}>
                  <AiFillEdit /> Edit task
                </Box>
                <Box onClick={() => deleteProjectTask(taskId._id)} display='flex' cursor='pointer' alignItems='center' gap='7px' padding='5px 10px' _hover={{ background: "#343d4b" }}>
                  <MdDelete /> Delete
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      })}
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
       + Add Task
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent
          bg={'#2a313c'}
          mt={40}
        >
          {/* right Section */}
          <DrawerCloseButton color={'white'} />
          {/* here comes the head */}
          <form onSubmit={handleSubmit}>
            <DrawerHeader display={"flex"}>
              <Inp formData={formData} setFormData={setFormData} />
            </DrawerHeader>
            {/* <hr /> */}
            <DrawerBody>
              <Input placeholder='Task name' borderWidth={".3px"}
                color='white'
                value={formData.taskName}
                onChange={(e) => setFormData({ ...formData, taskName: e.target.value })} />
              <br />
              <br />
              <Textarea placeholder={'Add Details...'}
                color='white'
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              <br />
              <Down formData={formData} setFormData={setFormData} />
              <br />
              <ProjAdd />
              <br />

            </DrawerBody>
          </form>

          {/* <DrawerFooter>

            </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default TaskModal