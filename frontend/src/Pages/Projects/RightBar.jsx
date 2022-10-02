import React, { useState } from "react"
import { css } from "@emotion/react";

import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Input,
  Text,
  Select,
  Stack,
  Textarea,
  useDisclosure,
  Switch,
  Tooltip,
  Slide,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import styles from "./Project.module.css";
import { AiOutlineClockCircle } from "react-icons/ai"



function RightBar({ addProject, alertMsg }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [date, setDate] = useState("")
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({ projectName: "", dueDate: "", estimatedTime: "",client:"" })

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    addProject(formData);
  }

  return (
    <>

     <Slide in={alertMsg} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }} bg='white' color="red" mt={"-20px"}>
        <Alert status='error' w='60vw' mx='20vw'  color="red">
          <AlertIcon />
          <AlertTitle>Project with this name already exist.</AlertTitle>
          <AlertDescription>Try creating new project.</AlertDescription>
        </Alert>
      </Slide>


      <Button variant="unstyled" fontSize={14} pb="16px" leftIcon={<AddIcon />} onClick={onOpen}>
        Project
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size={"sm"}

      >
        <DrawerOverlay />
        <DrawerContent bg="#313946"  >
          <DrawerCloseButton color="#a5afbb" Position="absolute" left="20px" top="20px" />
          <form onSubmit={handleSubmit}>
            <DrawerHeader color="white" pl="280px">
              <Tooltip label="Due Date" aria-label='A tooltip'>
                <Input
                  placeholder="Due Date"
                  size="sm"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  w="140px"
                  type="date"
                  border="none"
                  css={css`
                ::-webkit-calendar-picker-indicator {
                background-color:white;
                }`}
                />
              </Tooltip>
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box  >
                  {/* <FormLabel htmlFor="username" color="#aeb4b9" fontSize={20} >Project Name</FormLabel> */}
                  <Input
                    ref={firstField}
                    id="username"
                    border="1px solid #4b576e"
                    p="8px"
                    outline="none"
                    color="white"
                    variant="unstyled"
                    mt={5}
                    placeholder="Project name"
                    fontSize={20}
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    required
                  />
                  <Flex w={8} h={8} position="absolute" left="448px" top={100} bg="#4b576e" borderRadius={5}></Flex>
                </Box>


                <Box>
                  <Flex>
                    <Switch size='md' h={5} mt="3px" defaultChecked />
                    <Text fontSize={16} color="white" ml="10px" fontWeight={700}>PUBLIC</Text>
                  </Flex>
                </Box>

                <Box>
                  <Flex>
                    <Box>
                      <Text color="#7fa8c1">Client</Text>
                      <Select id='owner' w="xsm" color="white" fontSize={12} variant="unstyled" defaultValue='Add custom field'>
                        <option value='segun'>Add custom field</option>
                        <option value='kola'>Manage field</option>
                      </Select>
                    </Box>
                    <Input w="200px" px="10px" border="1px solid #4b576e" variant="unstyled" borderRadius="5px" ml="100px" placeholder="Client" value={formData.client} onChange={(e)=>setFormData({...formData,client:e.target.value})} color="white" />
                    <Button variant="unstyled" h="50px" visibility={text == "" ? "hidden" : "visible"} border="1px solid #4b576e" bg="black" color="white" >Add</Button>
                  </Flex>
                </Box>

                <Box >
                  <FormLabel htmlFor="owner" color="#7fa8c1" mt={10} fontSize={12} fontWeight={200}>Estimated Time</FormLabel>
                  <Input
                    type="number"
                    placeholder="00.00"
                    border="1px solid #4b576e"
                    p="8px"
                    outline="none"
                    color="white"
                    variant="unstyled"
                    value={formData.estimatedTime}
                    onChange={(e) => setFormData({ ...formData, estimatedTime: +e.target.value })}
                    required
                  />
                  <AiOutlineClockCircle color="#7fa8c1" style={{ position: "absolute", left: "380px", top: "363px", fontSize: "20px" }} />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="unstyled" p={2} border="1px solid #4b576e" color="#7fa8c1" mr={4} onClick={onClose}>
                Cancel
              </Button>
              <Button bg="black" color="white" type='submit'>Save</Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default RightBar;






