import React, {useEffect, useState} from 'react';
import {SimpleGrid} from "@chakra-ui/react";
import RatingCard from "./RatingCard";
import ActivityCard from "./ActivityCard";
import axios from "axios";
import {useRouter} from "next/router";

const RatingsList = ({id,ratings}) => {
   // let [ratings,setRatings]  = useState([]);
    const ratingsList= ratings.map((rating,index) => (
        <div key={index}><RatingCard  rating={rating}/></div>
    ))

    return (
        <SimpleGrid spacing={3}>
            {ratingsList}
        </SimpleGrid>

    );
};

export default RatingsList;