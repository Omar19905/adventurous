import React from 'react';
import {Box, Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";

const TotalSales = () => {
    return (
        <Stat rounded={"lg"}  textAlign={"center"} p={4} bg={"gray.50"} >
            <StatLabel fontSize={"lg"} color={"g.1"} fontWeight={"semibold"}>Total Sales</StatLabel>
            <StatNumber color={"g.2"}>$345,670</StatNumber>
            <StatHelpText>
                <StatArrow type='increase' />
                10%
            </StatHelpText>
        </Stat>
    );
};

export default TotalSales;