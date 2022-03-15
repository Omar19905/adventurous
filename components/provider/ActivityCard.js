import React from 'react';
import {Box, Button, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Spacer, Text} from "@chakra-ui/react";
import {FiCalendar, FiEdit, FiMapPin, FiMoreHorizontal, FiTrash} from "react-icons/fi";
import {useRouter} from 'next/router'

const ActivityCard = ({activities,setActivity}) => {
    const router = useRouter()
    console.log(activities)
    const activitiesList = activities.map((activity) => (
        <div key={activity.id}>
            <Box p={3} mt={5} rounded={"2xl"} w={"90%"} mx={"auto"} minH={"130px"}
                 bg={"g.1"}>
                <HStack mb={2}>
                    <Text fontSize={"2xl"} fontWeight={"bold"} color={"g.2"}>{activity.username}</Text>
                    <Spacer/>

                    <Menu>
                        <MenuButton bg={"transparent"} _hover={{backgroundColor: "transparent"}}
                                    _active={{backgroundColor: "transparent"}} color={"white"} as={Button}>
                            <Icon as={FiMoreHorizontal} mt={"27%"} color={"#fff"} w={6} h={6}/>
                        </MenuButton>
                        <MenuList color={"g.2"}>
                            <MenuItem onClick={() => {
                                setActivity(activity)
                                router.push('/provider/edit', undefined, {shallow: true});

                            }}
                            >
                                <Icon  pr={1} as={FiEdit} color={"g.2"} w={6} h={6}/>
                                <Text fontWeight={"semibold"} color={"g.1"}>Edit</Text>
                            </MenuItem>
                            <MenuItem>
                                <Icon pr={1} as={FiTrash} color={"g.2"} w={6} h={6}/>
                                <Text fontWeight={"semibold"} color={"g.1"}>Delete</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                </HStack>

                <HStack>
                    <Icon as={FiCalendar} color={"white"} w={6} h={6}/>
                    <Text fontSize={"lg"} fontWeight={"light"} color={"white"}>
                        March 17th
                    </Text>
                </HStack>

                <HStack mt={2}>
                    <Icon as={FiMapPin} color={"white"} w={6} h={6}/>
                    <Text fontSize={"lg"} fontWeight={"light"} color={"white"}>
                        Dhahran
                    </Text>
                </HStack>


            </Box></div>
    ));

    return (
        activitiesList
    );
};

export default ActivityCard;