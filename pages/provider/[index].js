import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Center,
    Divider,
    HStack, Link, Menu, MenuButton,
    MenuItem,
    MenuList,
    SimpleGrid,
    Spacer,
    Text,
    VStack
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import Clock from 'react-live-clock';
import {Icon} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import axios from "axios";

import {FiUser, FiBell, FiActivity, FiMoreHorizontal, FiEdit, FiTrash, FiCalendar, FiMapPin} from "react-icons/fi";

import moment from 'moment-timezone';
import Main from "../../components/provider/Main";
import AddActivity from "../../components/provider/AddActivity";
import EditActivity from "../../components/provider/EditActivity";
import Header from "../../components/provider/Header";
import ActivityCard from "../../components/provider/ActivityCard";


const Index = () => {
    const router = useRouter()
    const {index} = router.query
    // for render all list
    const [activities, setActivities] = useState([])
    // for edit an activity
    const [activity, setActivity] = useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/")
            .then((responce)=>{
                setActivities(responce.data)
            })
    },[])
    return (
        <>
            <HStack  mt={10} bg={"gray.50"}>
                <Box  overflowY={"scroll"} rounded={"lg"} mx={12} shadow={"xl"} bg={"white"} w={"25vw"} h={"85vh"}>
                    <HStack h={16} bg={"white"} position={"sticky"} top={0} my={7} mx={4}>
                        <Text fontSize={"2xl"} fontWeight={"bold"} color={"#753a88"}>Activities</Text>
                        <Spacer/>
                        <Button onClick={() => router.push('/provider/add', undefined, {shallow: true})}
                                bg={"transparent"}>
                            <AddIcon w={6} h={6} color={"#753a88"}/>
                        </Button>
                    </HStack>

                    <Divider orientation={"horizontal"}/>

                    {/*Activity card*/}
                    <ActivityCard activities={activities} setActivity={setActivity}/>

                </Box>

                {/*right side*/}
                <Box position={"relative"} rounded={"lg"} mx={12} shadow={"xl"} bg={"white"} w={"65vw"} minH={"85vh"}>

                  <Header/>

                    <Divider orientation={"horizontal"}/>

                    {index === "dashboard" && <Main/>}
                    {index === "add" && <AddActivity/>}
                    {index === "edit" && <EditActivity activity={activity}/>}
                </Box>

            </HStack>
        </>
    );
};

export default Index;