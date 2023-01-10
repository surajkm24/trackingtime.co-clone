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
import { useSelector } from 'react-redux'

const TaskModal = ({ addProjectTask, updateProjectTask, deleteProjectTask }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const [formData, setFormData] = useState({ taskName: "", description: "", status: false, estimatedTime: 0 })
  const { selectedProject, tasks } = useSelector(store => store.project)
  const handleSubmit = (e) => {
    e.preventDefault();
    addProjectTask(formData);
    onClose();
  }
  return (
    <Box p='10px 25px'>
      {tasks?.map((task) => {
        return (
          <Box display='flex' alignItems='center' justifyContent='space-between' gap='20px' borderBottom='1px solid rgba(0,0,0,0.1)' p='10px 15px' _hover={{ background: "rgba(0,0,0,0.11)" }}>
            <Box display='flex' alignItems='center' gap='20px'>
              <Checkbox colorScheme='green' borderColor='#969BA6' isChecked={task.status} onChange={(e) => updateProjectTask(e.target.checked, task._id)} />
              <Text color='#0a192f' fontSize='13px' fontWeight='600'>{task.taskName.toUpperCase()}</Text>
            </Box>
            <Popover trigger='hover'>
              <PopoverTrigger>
                <Box color='black' fontWeight='800' w='20px' h='20px' cursor='pointer'>
                  <span>...</span>
                </Box>
              </PopoverTrigger>
              <PopoverContent mr='20px' bg='white' w='150px' >
                <PopoverBody px='0' boxShadow='lg' fontWeight={600} fontSize='13px' color='#0a192f'>
                  <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='5px 10px' _hover={{ background: "rgba(0,0,0,0.1)" }}>
                    <AiFillEdit /> Edit task
                  </Box>
                  <Box onClick={() => deleteProjectTask(task._id)} display='flex' cursor='pointer' alignItems='center' gap='7px' padding='5px 10px' _hover={{ background: "rgba(0,0,0,0.1)" }}>
                    <MdDelete /> Delete
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        )
      })}
      <Button mt='10px' h='30px' w='80px' ref={btnRef} color='gray' fontSize='12px' fontWeight={700} variant='unstyled' _hover={{ color: 'black', background: "rgba(0,0,0,0.1)" }} onClick={onOpen}>
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
          bg={'white'}
        >
          {/* right Section */}
          <DrawerCloseButton color={'black'} />
          {/* here comes the head */}
          <form onSubmit={handleSubmit}>
            <DrawerHeader display={"flex"}>
              <Inp formData={formData} setFormData={setFormData} />
            </DrawerHeader>
            {/* <hr /> */}
            <DrawerBody>
              <Input placeholder='Task name' borderWidth={".3px"}
                color='black'
                value={formData.taskName}
                fontSize='17px'
                required
                onChange={(e) => setFormData({ ...formData, taskName: e.target.value })} />
              <br />
              <br />
              <Textarea placeholder={'Add Details...'}
                color='black'
                value={formData.description}
                fontSize='14px'
                onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              <br />
              <Down formData={formData} setFormData={setFormData} />
              <br />
              <Flex justifyContent={"flex-end"} gap='20px' position='absolute' bottom='20px' right='20px'>
                <Button fontSize='14px' fontWeight={700} variant="unstyled" color="rgba(0,0,0,0.7)" _hover={{ textDecoration: "underline", color: "black" }} onClick={onClose} mr='20px'>
                  CANCEL
                </Button>
                <Button bg="black" _hover='black' w='120px' h='40px' fontSize='14px' fontWeight={600} color="whitesmoke" type='submit'>SAVE</Button>
              </Flex>
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