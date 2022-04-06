import React from 'react';
import {Box, Button, Center, Divider, HStack, Icon, Image, Spacer, Text, VStack} from "@chakra-ui/react";
import {HiStar} from "react-icons/hi";

import Moment from 'react-moment';
import {useRouter} from "next/router"

const ActivityCard = ({activity}) => {
    console.table(activity)
    let router = useRouter();
    return (
        <Box onClick={()=> router.push(`activity/${activity._id.$oid}`)} _hover={{cursor:"pointer"}} mt={"50px"}  shadow={"2xl"} position={"relative"} rounded={"3xl"} w={"400px"} h={"290px"} >
            {activity.rating>0&&<Box position={"absolute"} top={2} right={5} w={"60px"} h={"25px"} bg={"white"} rounded={"2xl"}
                  fontWeight={"semibold"}>
                <Center>{activity.rating} <Icon color={"#fcd34c"} as={HiStar}/> </Center>
            </Box>}
            {/*https://images.unsplash.com/photo-1485561222814-e6c50477491b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80*/}
            <Image h={"100%"}  rounded={"3xl"} w={"100%"} src={activity.picture}/>
            <HStack h={16} px={4} w={"100%"} position={"absolute"} bottom={-7} bg={"white"} rounded={"2xl"}>
                {/*info*/}
                <VStack  align={"flex-start"}  justify={"left"} w={"82%"}>
                    {/*Title*/}
                    <Text  fontSize={"xl"} fontWeight={"bold"}>{activity.title}</Text>
                    <HStack w={"300px"}>{/*City*/}
                        <Text color={"gray.500"}>{activity.city} |</Text>

                        {/*Date*/}
                        <Text color={"gray.500"}><Moment format={"D MMM YYYY"}>{activity.date}</Moment></Text></HStack>
                </VStack>
                <Spacer/>
                <Text fontSize={"xl"} fontWeight={"semibold"}  color={"g.2"} >${activity.price} </Text>
            </HStack>
        </Box>
    );
};


export default ActivityCard;