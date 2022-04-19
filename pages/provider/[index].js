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
import {checkCookies, getCookie, setCookies} from "cookies-next";
import Statistics from "../../components/provider/Statistics";
import EditProfile from "../../components/provider/EditProfile";
import SendNotifications from "../../components/provider/SendNotifications";


const Index = () => {
    const router = useRouter()
    const {index} = router.query
    // for render all list
    const [activities, setActivities] = useState([])
    // for edit an activity
    const [activity, setActivity] = useState("")

    let [isLogedIn, setIsLogedIn] = useState(checkCookies('provider'));


    let [isLoading, setIsloading] = useState(true);

    let [provider, setProvider] = useState("");

    useEffect(() => {
        if (isLogedIn)
            setProvider(JSON.parse(getCookie("provider")))
        console.log(provider.company_name)
        getActivities()
    }, [isLogedIn])


    function getActivities() {
        setIsloading(true)
        let provider_cookies = JSON.parse(getCookie("provider"))
        let provider_id = provider_cookies._id.$oid
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/get/provider/activities',
            params: {
                activity_provider_id: provider_id,
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            }

        }).then(function (response) {
            console.log(response.data)
            setActivities(response.data)
            setIsloading(false)
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
            }
        })
    }


    return (
        <>
            <HStack mt={6} bg={"gray.50"}>
                <Box overflowY={"scroll"} rounded={"lg"} mx={12} shadow={"xl"} bg={"white"} w={"25vw"} h={"93vh"}>
                    <HStack h={16} bg={"white"} position={"sticky"} top={0} my={7} mx={4}>
                        <Text fontSize={"2xl"} fontWeight={"bold"} color={"g.2"}>Activities</Text>
                        <Spacer/>
                        <Button onClick={() => router.push('/provider/add', undefined, {shallow: true})}
                                bg={"transparent"}>
                            <AddIcon w={6} h={6} color={"g.2"}/>
                        </Button>
                    </HStack>

                    <Divider orientation={"horizontal"}/>

                    {/*Activity card | list*/}
                    <ActivityCard getActivities={getActivities} isLoading={isLoading} activities={activities} setActivity={setActivity}/>

                </Box>

                {/*right side*/}
                <Box position={"relative"} rounded={"lg"} mx={12} shadow={"xl"} bg={"white"} w={"65vw"} minH={"93vh"}>

                    <Header cname={provider.company_name}/>

                    <Divider orientation={"horizontal"}/>

                    {index === "dashboard" && <Main/>}
                    {index === "send_notifications" && <SendNotifications/>}
                    {index === "edit_profile" && <EditProfile activity={activity} />}
                    {index === "statistics" && <Statistics/>}
                    {index === "add" && <AddActivity getActivities={getActivities}/>}
                </Box>

            </HStack>
        </>
    );
};

export default Index;