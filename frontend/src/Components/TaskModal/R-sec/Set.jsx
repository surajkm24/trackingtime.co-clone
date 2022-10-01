import { Avatar, DrawerCloseButton, DrawerOverlay, Flex } from '@chakra-ui/react';
import React from 'react';

const Set = () => {
    return (
        <Flex border={'1px solid white'} >
            <Avatar bg='white'size={"sm"} />
            <DrawerCloseButton />
        </Flex>
    );
}

export default Set;
