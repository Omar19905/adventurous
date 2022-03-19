import React from 'react';
import {Box, Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";

const TotalSales = () => {
    return (
        <Stat >
            <StatLabel color={"g.1"} fontWeight={"semibold"}>Total Sales</StatLabel>
            <StatNumber color={"g.2"}>$345,670</StatNumber>
            <StatHelpText>
                <StatArrow type='increase' />
                23.36%
            </StatHelpText>
        </Stat>
    );
};

export default TotalSales;