import React, {useEffect, useState} from 'react';
import {Center, CircularProgress, SimpleGrid, Spinner} from "@chakra-ui/react";
import ActivityCard from "./ActivityCard";
import axios from "axios";

const ActivitiesList = () => {
    let[isLoading,setIsLoading]= useState(true)
    let [activities,setActivites]  = useState([]);
    const activitiesList= activities.map((activity,index) => (
        <div key={index}><ActivityCard activity={activity}/></div>
    ))

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/get/activities',
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            setActivites(response.data)
            setIsLoading(false)
        })
    },[])
    if (isLoading)
        return (
            <Center>
                <CircularProgress mt={"9%"} size='100px' thickness='2px' isIndeterminate color='g.2'/>
            </Center>


        )
    return (
        <SimpleGrid mb={"5rem"}  mx={"5rem"} columns={3} spacing={10}>
            {activitiesList}
        </SimpleGrid>
    );
};

export default ActivitiesList;