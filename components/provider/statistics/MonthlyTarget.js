import React from 'react';
import {Box, CircularProgress, CircularProgressLabel, Text} from "@chakra-ui/react";

const MonthlyTarget = () => {
    return (
        <Box rounded={"lg"} textAlign={"center"} p={4} bg={"gray.50"} >
            <Text color={"g.1"} fontSize={"lg"} fontWeight={"semibold"}> Sales Target</Text>
            <CircularProgress mt={"9%"} size='140px' thickness='3px' value={"60"} color='g.2'>
            <CircularProgressLabel color={"g.1"}>60%</CircularProgressLabel>
        </CircularProgress>
        </Box>
    );
};

export default MonthlyTarget;