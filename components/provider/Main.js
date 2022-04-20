import React from 'react';
import {Box, Center, Icon, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {FiActivity, FiBell, FiUser} from "react-icons/fi";
import {useRouter} from "next/router";

const Main = () => {
    let router = useRouter()
    return (
        <SimpleGrid mx={10} mt={10} columns={4} spacingX='20px' spacingY='20px'>
            <VStack >
                <Box onClick={() => router.push('/provider/edit_profile', undefined, {shallow: true})} _hover={{cursor:"pointer"}} rounded={"2xl"} bg='gray.100' height='80px' w={"90px"}>
                    <Center><Icon as={FiUser} mt={"27%"} color={"g.2"} w={9} h={9}/></Center>
                </Box>
                <Text color={"g.1"} fontSize={"lg"} fontWeight={"bold"}>Account</Text>
            </VStack>

            <VStack onClick={() => router.push('/provider/send_notifications', undefined, {shallow: true})} >
                <Box _hover={{cursor:"pointer"}} rounded={"2xl"} bg='gray.100' height='80px' w={"90px"}>
                    <Center><Icon as={FiBell} mt={"27%"} color={"g.2"} w={9} h={9}/></Center>
                </Box>
                <Text color={"g.1"} fontSize={"lg"} fontWeight={"bold"}>Send Notifications</Text>
            </VStack>

            <VStack onClick={() => router.push('/provider/statistics', undefined, {shallow: true})} >
                <Box  _hover={{cursor:"pointer"}} rounded={"2xl"} bg='gray.100' height='80px' w={"90px"}>
                    <Center><Icon  as={FiActivity} mt={"27%"} color={"g.2"} w={9} h={9}/></Center>
                </Box>
                <Text color={"g.1"} fontSize={"lg"} fontWeight={"bold"}>Report</Text>
            </VStack>




        </SimpleGrid>

    );
};

export default Main;