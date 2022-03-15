import React from 'react';
import {Box, Button, Center, Divider, HStack, Icon, Image, Spacer, Text, VStack} from "@chakra-ui/react";
import {HiStar} from "react-icons/hi";

const ActivityCard = () => {
    return (
        <Box _hover={{cursor:"pointer"}} mt={"50px"} mx={"5rem"} shadow={"2xl"} position={"relative"} rounded={"3xl"} w={"400px"} >
            <Box  position={"absolute"} top={2} right={5} w={"60px"} h={"25px"} bg={"white"} rounded={"2xl"} fontWeight={"semibold"}>
                <Center>4.5 <Icon color={"#ffe234"} as={HiStar}/> </Center>
            </Box>
            {/*https://images.unsplash.com/photo-1485561222814-e6c50477491b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80*/}
            <Image  rounded={"3xl"} w={"100%"} src={"https://images.unsplash.com/photo-1604156788872-fa65cd2575f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
            <HStack h={16} px={4} w={"100%"} position={"absolute"} bottom={-7} bg={"white"} rounded={"2xl"}>
                {/*info*/}
                <VStack  align={"flex-start"}  justify={"left"} w={"92%"}>
                    {/*Title*/}
                    <Text  fontSize={"xl"} fontWeight={"bold"}>Hot Air Balloon Ride</Text>
                    <HStack w={"300px"}>{/*City*/}
                        <Text color={"gray.500"}>Dhahran |</Text>

                        {/*Date*/}
                        <Text color={"gray.500"}>16 March 2022</Text></HStack>
                </VStack>
                <Spacer/>
                <Button rounded={"3xl"} bg={"transparent"} border={"black 2px solid"}>Buy</Button>
            </HStack>
        </Box>
    );
};

export default ActivityCard;