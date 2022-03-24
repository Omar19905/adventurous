import React from 'react';
import {Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";

const TotalOrders = () => {
    return (
        <Stat rounded={"lg"} textAlign={"center"} p={4} bg={"gray.50"} >
            <StatLabel color={"g.1"} fontSize={"lg"} fontWeight={"semibold"}>Total Orders</StatLabel>
            <StatNumber color={"g.2"}>33</StatNumber>
            <StatHelpText>
                <StatArrow type='increase' />
                23.35%
            </StatHelpText>
        </Stat>

    );
};

export default TotalOrders;