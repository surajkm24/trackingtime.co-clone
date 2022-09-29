import { Button, Modal, ModalBody, ModalCloseButton,ModalFooter,ModalContent,ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react'

const ContinueToProjects =()=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal w="600px" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create project</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              By clicking "Continue", you can start your new projects.
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3}>
                Continue
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default ContinueToProjects