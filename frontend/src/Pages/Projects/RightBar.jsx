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
  const [formData, setFormData] = useState({ projectName: "", dueDate: "", estimatedTime: "", client: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    addProject(formData);
  }

  return (
    <>

      <Slide in={alertMsg} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }} bg='white' color="red" mt={"-20px"}>
        <Alert status='error' w='60vw' mx='20vw' color="red">
          <AlertIcon />
          <AlertTitle>Project with this name already exist.</AlertTitle>
          <AlertDescription>Try creating new project.</AlertDescription>
        </Alert>
      </Slide>


      <Button variant="unstyled" fontSize={10} leftIcon={<AddIcon fontSize='9px' />} border='1px solid rgba(0,0,0,0.06)' p='3px 12px' h='fit-content' borderRadius='4px' onClick={onOpen}>
        PROJECT
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size={"sm"}

      >
        <DrawerOverlay />
        <DrawerContent bg="white"  >
          <Box>
            <DrawerCloseButton color="#0a192f" Position="absolute" left="20px" top="20px" />
          </Box>
          <form onSubmit={handleSubmit}>
            <DrawerHeader color="#0a192f" pl="280px" >
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
              <Stack spacing="24px" borderTop='1px solid rgba(0,0,0,0.1)'>
                <Box mt='15px' display='flex' gap='10px' alignItems={'center'} border='1px solid rgba(0,0,0,0.1)' p='8px' borderRadius='5px'>
                  {/* <FormLabel htmlFor="username" color="#aeb4b9" fontSize={20} >Project Name</FormLabel> */}
                  <Input
                    ref={firstField}
                    id="username"
                    outline="none"
                    color="black"
                    variant="unstyled"
                    placeholder="Project name"
                    _placeholder={{ fontWeight: '400' }}
                    fontWeight={600}
                    fontSize={18}
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    required
                  />
                  <Flex w={5} h={5} bg="rgba(0,0,0,0.25)" borderRadius={'3px'}></Flex>
                </Box>


                <Box>
                  <Flex alignItems={'center'} gap='14px'>
                    <Switch size='sm' defaultChecked />
                    <Text fontSize={15} color="whit" fontWeight={700}>PUBLIC</Text>
                  </Flex>
                </Box>

                <Box>
                  <Flex alignItems='center'>
                    <Box>
                      <Text color="black" fontSize='12px' fontWeight={600}>Client</Text>
                      <Select id='owner' w="100px" color="black" fontSize={12} variant="unstyled" defaultValue='Add custom field'>
                        <option value='segun'>Add custom field</option>
                        <option value='kola'>Manage field</option>
                      </Select>
                    </Box>
                    <Input  px="10px" py='2px' mr='10px' border="1px solid rgba(0,0,0,0.1)" variant="unstyled" borderRadius="5px" ml="100px" placeholder="Client" value={formData.client} onChange={(e) => setFormData({ ...formData, client: e.target.value })} color="black" />
                    <Button fontSize='11px' variant="unstyled" borderRadius={'3px'} h="28px" visibility={formData.client == "" ? "hidden" : "visible"} border="1px solid #4b576e" bg="black" color="white" >Add</Button>
                  </Flex>
                </Box>

                <Box>
                  <FormLabel htmlFor="owner" color="#0a192f" mt={10} fontSize={'10px'} fontWeight={700}>Estimated Time</FormLabel>
                  <Box display='flex'
                    border="1px solid rgba(0,0,0,0.1)"
                    p='8px'
                    borderRadius='5px'
                    gap='10px'
                    alignItems='center'
                  >
                    <Input
                      type="number"
                      placeholder="00.00"
                      outline="none"
                      color="black"
                      variant="unstyled"
                      value={formData.estimatedTime}
                      onChange={(e) => setFormData({ ...formData, estimatedTime: +e.target.value })}
                      required
                    />
                    <AiOutlineClockCircle color="#0a192f" style={{ fontSize: "20px" }} />
                  </Box>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter position='absolute' bottom='0px' right='0px'>
              <Button fontSize='14px' fontWeight={700} variant="unstyled" color="rgba(0,0,0,0.7)" _hover={{textDecoration:"underline",color:"black"}} onClick={onClose} mr='20px'>
                CANCEL
              </Button>
              <Button bg="black" _hover='black' w='120px' h='40px' fontSize='14px' fontWeight={600} color="whitesmoke" type='submit'>SAVE</Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default RightBar;






