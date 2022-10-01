import { ChevronDownIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Project.module.css";
import RightBar from "./RightBar";





const LeftSidebar = ({ addProject }) => {

  const [Filtered, setFiltered] = useState({ all: "ALL", duedate: "BY DUEDATE" })




  return (
    <Box w="23%" h="92vh" bg="#313946" >
      <Box
        borderBottom="1px solid #374050"
        color="#7fa8c1"
        fontSize={14}
        fontWeight={800}
        p="14px"
        _hover={{ color: "white" }}
      >
        MY TASKS
      </Box>
      <Box align="center" mt="10px" mb="20px">
        <HStack spacing="10px">
          <Box
            w="200px"
            h="10"
            mr="10px"
            pt="8px"
            fontSize={14}
            fontWeight={700}
            alignItems="center"
            color="white"
          >
            PROJECT <ChevronDownIcon color="white" />{" "}
          </Box>
          <Box w="50px" h="6" p={1} border="1px solid  #374050 ">
            <Img
              src="https://pro.trackingtime.co/img/projects-timeline-ico.svg"
              h="12px"
              w="12px"
            />
          </Box>
          <Box
            w="250px"
            h="6"
            color="white"
            borderRadius="5px"
            border="1px solid #374050"
          >
            <RightBar addProject={addProject} />
          </Box>
        </HStack>
      </Box>

      <Popover trigger="hover" >
        <PopoverTrigger>
          <Button
            bg="#343D4B"
            _hover={{ background: "#343D3C" }}
            fontSize="11px"
            h="30px"
            px="10px"
            color="white"
          >
            {Filtered.all} <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent bg="#2A313C" w="200px" borderColor="#2A313C" color="white">
          <PopoverBody fontWeight={600} fontSize="13px">
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              gap="7px"
              padding="10px"
              _hover={{ color: "blue" }}
              onClick={() => setFiltered({ ...Filtered, all: "ALL" })}
            >
              All
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              gap="7px"
              padding="10px"
              _hover={{ color: "blue" }}
              onClick={() => setFiltered({ ...Filtered, all: "FAVORITES" })}

            >
              Favorites
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              gap="7px"
              padding="10px"
              _hover={{ color: "blue" }}
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
            bg="#343D4B"
            _hover={{ background: "#343D3C" }}
            fontSize="11px"
            h="30px"
            px="10px"
            color="white"
          >
            {Filtered.duedate} <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent bg="#2A313C" w="200px" borderColor="#2A313C" color="white">
          <PopoverBody fontWeight={600} fontSize="13px">
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              gap="7px"
              padding="10px"
              _hover={{ color: "blue" }}
              onClick={() => setFiltered({ ...Filtered, duedate: "BY ORDER" })}
            >
              By Order
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              gap="7px"
              padding="10px"
              _hover={{ color: "blue" }}
              onClick={() => setFiltered({ ...Filtered, duedate: "BY NAME" })}
              Favorites
            >
              By Name
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              gap="7px"
              padding="10px"
              _hover={{ color: "blue" }}
              onClick={() => setFiltered({ ...Filtered, duedate: "BY DUE DATE" })}
            >
              By Due Date
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>

    </Box>
  );
};

export default LeftSidebar;
