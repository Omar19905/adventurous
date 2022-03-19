import React from 'react';
import {SimpleGrid} from "@chakra-ui/react";
import RatingCard from "./RatingCard";

const RatingsList = () => {
    return (
        <SimpleGrid spacing={3}>
                <RatingCard/>
                <RatingCard/>
                <RatingCard/>
                <RatingCard/>
        </SimpleGrid>

    );
};

export default RatingsList;