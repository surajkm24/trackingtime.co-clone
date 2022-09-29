import { Button, Modal, ModalBody, ModalCloseButton,ModalFooter,ModalContent,ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react'

const ReviewTerms =()=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal w="600px" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Review the terms</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              By clicking "i agree", you understand and agree to our terms of service and privacy policy
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3}>
                I agree
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default ReviewTerms