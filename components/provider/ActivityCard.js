import React from 'react';
import {
    Box,
    Button,
    Center,
    CircularProgress, Heading,
    HStack,
    Icon, Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Text, useToast
} from "@chakra-ui/react";
import {FiCalendar, FiEdit, FiMapPin, FiMoreHorizontal, FiTrash} from "react-icons/fi";
import {useRouter} from 'next/router'
import axios from "axios";
import EditActivity from "./EditActivity";
import Moment from "react-moment";

const ActivityCard = ({activities,setActivity,getActivities,isLoading}) => {
    const router = useRouter()
    const toast = useToast()

    function handleDeleteActivity(activityId){
        axios({
            method: 'delete',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/delete/activity',
            data:{
                activity_id: activityId
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            getActivities()
            toast({
                title: 'Activity deleted',
                position:"top-right",
                description: "your activity deleted successfully.",
                status: 'error',
                duration: 8000,
                isClosable: true,
            })
        })
    }
    const activitiesList = activities.map((activity) => (

        <div key={activity.id}>
            {    console.table(activity.date)
            }
            <Box p={3} mt={5} rounded={"2xl"} w={"90%"} mx={"auto"} minH={"130px"}
                 bg={"g.1"}>
                <HStack mb={2}>
                    <Text fontSize={"2xl"} fontWeight={"bold"} color={"g.2"}>{activity.title}</Text>
                    <Spacer/>

                    <Menu>
                        <MenuButton bg={"transparent"} _hover={{backgroundColor: "transparent"}}
                                    _active={{backgroundColor: "transparent"}} color={"white"} as={Button}>
                            <Icon as={FiMoreHorizontal} mt={"27%"} color={"#fff"} w={6} h={6}/>
                        </MenuButton>
                        <MenuList color={"g.2"}>
                            <EditActivity activity={activity} getActivities={getActivities}/>
                            <MenuItem onClick={()=>{
                               handleDeleteActivity(activity._id.$oid)

                            }}>
                                <Icon pr={1} as={FiTrash} color={"g.2"} w={6} h={6}/>
                                <Text fontWeight={"semibold"} color={"g.1"}>Delete</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                </HStack>

                <HStack>
                    <Icon as={FiCalendar} color={"white"} w={6} h={6}/>
                    <Text fontSize={"lg"} fontWeight={"light"} color={"white"}>

                        <Moment format={"D MMM YYYY"}>{activity.date}</Moment>
                    </Text>
                </HStack>

                <HStack mt={2}>
                    <Icon as={FiMapPin} color={"white"} w={6} h={6}/>
                    <Text fontSize={"lg"} fontWeight={"light"} color={"white"}>
                        {activity.city}
                    </Text>
                </HStack>


            </Box></div>
    ));

    if (isLoading)
        return (
            <Center>
                <CircularProgress mt={"9%"} size='100px' thickness='2px' isIndeterminate color='g.2'/>
            </Center>
       )

    if (activities.length<1)
        return (
            <>
                <Box mt={5} textAlign={"center"}>
                    <Image
                    src={"https://cdn.dribbble.com/users/8106/screenshots/6958392/media/6601e12d36487a0a3852897b26d222fd.png?compress=1&resize=1000x750&vertical=top"}/>
                <Text fontSize={"xl"} color={"g.1"} fontWeight={"semibold"} >you dont have activities </Text>
                <Text fontSize={"md"} color={"g.1"} >Activities will be shown here as they are added</Text>
                    <Button onClick={() => router.push('/provider/add', undefined, {shallow: true})} _hover={{backgroundColor:"g.2"}} size={"sm"} mt={2} bg={"g.2"} color={"white"}>Add Activity now</Button>
                </Box>
            </>
        )

    return (
        activitiesList
    );
};

export default ActivityCard;