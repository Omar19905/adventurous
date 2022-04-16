import React, {useEffect, useState} from 'react';
import {Center, CircularProgress, SimpleGrid, Spinner} from "@chakra-ui/react";
import ActivityCard from "./ActivityCard";
import axios from "axios";

const ActivitiesList = ({activities,isLoading}) => {


    const activitiesList= activities.map((activity,index) => (
        <div key={index}><ActivityCard activity={activity}/></div>
    ))


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