import React from 'react';
import {Box, Center, Icon, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {FiActivity, FiBell, FiUser} from "react-icons/fi";

const Main = () => {
    return (
        <SimpleGrid mx={10} mt={10} columns={4} spacingX='20px' spacingY='20px'>
            <VStack >
                <Box _hover={{cursor:"pointer"}} rounded={"2xl"} bg='gray.100' height='80px' w={"90px"}>
                    <Center><Icon as={FiUser} mt={"27%"} color={"#753a88"} w={9} h={9}/></Center>
                </Box>
                <Text fontSize={"lg"} fontWeight={"bold"}>Account</Text>
            </VStack>

            <VStack >
                <Box _hover={{cursor:"pointer"}} rounded={"2xl"} bg='gray.100' height='80px' w={"90px"}>
                    <Center><Icon as={FiBell} mt={"27%"} color={"#753a88"} w={9} h={9}/></Center>
                </Box>
                <Text fontSize={"lg"} fontWeight={"bold"}>Send Notifications</Text>
            </VStack>

            <VStack >
                <Box _hover={{cursor:"pointer"}} rounded={"2xl"} bg='gray.100' height='80px' w={"90px"}>
                    <Center><Icon as={FiActivity} mt={"27%"} color={"#753a88"} w={9} h={9}/></Center>
                </Box>
                <Text fontSize={"lg"} fontWeight={"bold"}>Statistics</Text>
            </VStack>




        </SimpleGrid>

    );
};

export default Main;