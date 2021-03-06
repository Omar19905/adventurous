import React from 'react';
import {Box, Spinner, Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";

const TotalSales = ({sales}) => {

    return (
        <Stat rounded={"lg"}  textAlign={"center"} p={4} bg={"gray.50"} >
            <StatLabel fontSize={"lg"} color={"g.1"} fontWeight={"semibold"}>Total Sales</StatLabel>
            {sales&&<StatNumber color={"g.2"}>
                SAR{sales}
            </StatNumber>}
            {!sales&&<Spinner color={"g.2"} />}
            <StatHelpText>
                {/*<StatArrow type='increase' />*/}
                {/*10%*/}
            </StatHelpText>
        </Stat>
    );
};

export default TotalSales;