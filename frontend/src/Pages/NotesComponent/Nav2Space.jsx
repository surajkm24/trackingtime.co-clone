import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../NotesComponent/Notes.module.css"
import AddBlock from './NotesComp/AddBlock'

const Nav2Space= () => {
  return (

   <Box  className={styles.Container}>   
     <Box className={styles.NotesContainer}>
          <Flex  className={styles.addTaskFlex}>
            {/* <Button className={styles.addTaskBtn}>
               +
            </Button> */}
            <AddBlock />
            <Text>Add block</Text>
          </Flex>
        </Box>
   </Box>
  )
}

export default Nav2Space
