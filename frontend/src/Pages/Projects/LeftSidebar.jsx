import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Img,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Text,
  Progress,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Project.module.css";
import './Sidebar.css';
import RightBar from "./RightBar";
import { AiFillDelete, AiFillStar, AiTwotoneEdit } from "react-icons/ai";
import {BsArchive, BsFillPlayFill} from 'react-icons/bs';
import {HiDocumentReport, HiOutlineDuplicate} from 'react-icons/hi'




const LeftSidebar = ({ addProject, data, singleProject, setSingleProject, deleteProject, alertMsg }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [Filtered, setFiltered] = useState({ all: "ALL", order: "BY ORDER" });
  return (
    <Box w={showSideBar ? '310px' : '0px'} h='93vh' bg='#f2f2f4' borderRadius='0px 5px 5px 0px' position='relative'>
      {showSideBar ? <ChevronLeftIcon onClick={() => setShowSideBar(false)} position={'absolute'} right='-20px' border='1px solid rgba(0,0,0,0.09)' borderRadius='0px 50% 50% 0px' fontSize='22px' cursor='pointer' top='10px' /> :
        <ChevronRightIcon onClick={() => setShowSideBar(true)} position={'absolute'} right='-20px' border='1px solid rgba(0,0,0,0.09)' borderRadius='0px 50% 50% 0px' fontSize='22px' cursor='pointer' top='10px' />}
      <Box display={showSideBar ? 'block' : "none"}>
        <Box
          borderBottom="1px solid rgba(0,0,0,0.09)"
          color="rgba(0,0,0,0.7)"
          fontSize={'13px'}
          fontWeight={800}
          p="14px"
          _hover={{ color: "black" }}
          cursor='pointer'

        >
          MY TASKS
        </Box>
        <Accordion allowMultiple defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <Box display='flex' justifyContent={'space-between'} alignItems='center'>
              <AccordionButton _hover='white' gap='10px'>
                <Box textAlign='left' fontWeight={800} fontSize='13px'>
                  PROJECTS
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Box display='flex' alignItems={'center'} gap='10px'>
                <Image
                  src="https://pro.trackingtime.co/img/projects-timeline-ico.svg"
                  h="12px"
                  w="12px"
                  border='1px solid rgba(0,0,0,0.06)'
                  p='4px'
                  boxSizing="content-box"
                  borderRadius={'4px'}
                />
                <Box w='100px'>
                  <RightBar addProject={addProject} alertMsg={alertMsg} />
                </Box>
              </Box>
            </Box>
            <AccordionPanel pb={4} px='0px'>
              <Popover trigger="hover" >
                <PopoverTrigger>
                  <Button
                    _hover='white'
                    fontSize="10px"
                    fontWeight={800}
                    px="0"
                    color="#0a192f"
                    borderBottom='1px solid #0a192f'
                    borderRadius='0px'
                    py='0'
                    h='20px'
                    ml='10px'
                  >
                    {Filtered.all} <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent ml='15px' bg="white" w="130px" color="#0a192f">
                  <PopoverBody borderRadius='5px' p='0' boxShadow='lg' fontWeight={600} fontSize="13px">
                    <Box
                      display="flex"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius='5px'
                      gap="7px"
                      color={Filtered.all === 'ALL' ? 'blue' : 'black'}
                      bg={Filtered.all === 'ALL' ? '#CFDAE0' : 'none'}
                      p='5px 10px'
                      _hover={{ background: "rgba(0,0,0,0.1)" }}
                      onClick={() => setFiltered({ ...Filtered, all: "ALL" })}
                    >
                      All
                    </Box>
                    <Box
                      display="flex"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius='5px'
                      gap="7px"
                      color={Filtered.all === 'FAVORITES' ? 'blue' : 'black'}
                      bg={Filtered.all === 'FAVORITES' ? '#CFDAE0' : 'none'}
                      p='5px 10px'
                      _hover={{ background: "rgba(0,0,0,0.1)" }}
                      onClick={() => setFiltered({ ...Filtered, all: "FAVORITES" })}

                    >
                      Favorites
                    </Box>
                    <Box
                      display="flex"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius='5px'
                      gap="7px"
                      color={Filtered.all === 'BY CLIENT' ? 'blue' : 'black'}
                      bg={Filtered.all === 'BY CLIENT' ? '#CFDAE0' : 'none'}
                      p='5px 10px'
                      _hover={{ background: "rgba(0,0,0,0.1)" }}
                      onClick={() => setFiltered({ ...Filtered, all: "BY CLIENT" })}
                    >
                      By Client
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover trigger="hover" >
                <PopoverTrigger>
                  <Button
                    _hover='white'
                    fontSize="10px"
                    fontWeight={800}
                    px="0"
                    color="#0a192f"
                    borderBottom='1px solid #0a192f'
                    borderRadius='0px'
                    py='0'
                    h='20px'
                    ml='20px'
                  >
                    {Filtered.order} <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent ml='65px' bg="white" w="130px" color="#0a192f">
                  <PopoverBody borderRadius='5px' p='0' boxShadow='lg' fontWeight={600} fontSize="13px">
                    <Box
                      display="flex"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius='5px'
                      gap="7px"
                      color={Filtered.order === 'BY ORDER' ? 'blue' : 'black'}
                      bg={Filtered.order === 'BY ORDER' ? '#CFDAE0' : 'none'}
                      p='5px 10px'
                      _hover={{ background: "rgba(0,0,0,0.1)" }}
                      onClick={() => setFiltered({ ...Filtered, order: "BY ORDER" })}
                    >
                      By order
                    </Box>
                    <Box
                      display="flex"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius='5px'
                      gap="7px"
                      color={Filtered.order === 'BY NAME' ? 'blue' : 'black'}
                      bg={Filtered.order === 'BY NAME' ? '#CFDAE0' : 'none'}
                      p='5px 10px'
                      _hover={{ background: "rgba(0,0,0,0.1)" }}
                      onClick={() => setFiltered({ ...Filtered, order: "BY NAME" })}

                    >
                      By name
                    </Box>
                    <Box
                      display="flex"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius='5px'
                      gap="7px"
                      color={Filtered.order === 'BY DUEDATE' ? 'blue' : 'black'}
                      bg={Filtered.order === 'BY DUEDATE' ? '#CFDAE0' : 'none'}
                      p='5px 10px'
                      _hover={{ background: "rgba(0,0,0,0.1)" }}
                      onClick={() => setFiltered({ ...Filtered, order: "BY DUEDATE" })}
                    >
                      By Duedate
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <div id='projectTiles' >
                {data?.length !== 0 ? data.map(project => {
                  return (

                    <Box display='flex'
                      alignItems='center'
                      justifyContent='space-between'
                      p='10px 14px'
                      bg={singleProject._id === project._id ? "rgb(215,226,228)" : "initial"}
                      cursor='pointer'
                      _hover={{ background: "rgb(215,226,228)" }}
                      onClick={() => setSingleProject(project)}
                      key={project._id}
                    >
                      <Box>
                        <Box display='flex'
                          alignItems='center'
                          gap='10px'>
                          <Box h='15px' w='15px' borderRadius='3px' bg='rgba(0,0,0,0.25)'></Box>
                          <Text color='black' fontWeight={600} fontSize='14px'>{project.projectName}</Text>
                        </Box>
                        <Box display='flex' alignItems='center' gap='10px'>
                          <Progress value={Math.floor((project.duration / (project.estimatedTime * 3600)) * 100)} colorScheme='blue' height='4px' w='20px' borderRadius='2px' />
                          <span style={{ fontSize: "8px", color: "black", fontWeight: "600" }}>{Math.floor((project.duration / (project.estimatedTime * 3600)) * 100)}%</span>
                          <span style={{ fontSize: "8px", color: "rgba(0,0,0,0.6)", fontWeight: "600" }}>
                            {project.duration < 60 ?
                              project.duration + "s" :
                              Math.floor(project.duration / 3600) + "h:" + Math.floor((project.duration % 3600) / 60) + 'm'}/{project.estimatedTime}:00</span>
                        </Box>
                      </Box>

                      <Popover >
                        <PopoverTrigger>
                          <Box color='black' fontWeight='800' w='20px' h='20px'>
                            <span>...</span>
                          </Box>
                        </PopoverTrigger>
                        <PopoverContent bg='whitesmoke' w='200px' border='none'>
                          <PopoverBody boxShadow='xl' px='0' py='10px' fontWeight={700} fontSize='12px' color='#0a192f'>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                             <AiTwotoneEdit/> Edit project
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                             <BsFillPlayFill/> Track
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                            <AiFillStar/>  Add to favourites
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                            <HiOutlineDuplicate/> Duplicate this project
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                            <HiDocumentReport/> Report
                            </Box>
                            <Box fontSize='12px' display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                              PRIORITY
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                             <BsArchive/> Archive
                            </Box>
                            <Box onClick={() => deleteProject(project._id)} display='flex' cursor='pointer' alignItems='center' gap='7px' padding='6px 12px' _hover={{ background: "rgba(0,0,0,0.099)" }}>
                            <AiFillDelete/>  Delete
                            </Box>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Box>
                  )
                }) : null}


              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box >
  );
};

export default LeftSidebar;

const colors = []
