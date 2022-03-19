import React from 'react';
import {Flex} from "@chakra-ui/react";
import BackButton from "../BackButton";
import TotalSales from "./statistics/TotalSales";

const Statistics = () => {
    return (
        <>
            <BackButton/>
            <Flex mx={5} p={6} w={"100%"}>
                <TotalSales/>
        </Flex>
        </>
    );
};

export default Statistics;