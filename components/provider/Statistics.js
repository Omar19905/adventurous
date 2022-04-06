import React from 'react';
import {Avatar, Box, Flex, HStack, Icon, Spacer, Text} from "@chakra-ui/react";
import BackButton from "../BackButton";
import TotalSales from "./statistics/TotalSales";
import MonthlySales from "./statistics/Monthly Sales";
import TotalOrders from "./statistics/TotalOrders";
import {HiStar} from "react-icons/hi";
import MonthlyTarget from "./statistics/MonthlyTarget";

const Statistics = () => {
    return (
        <>
            <BackButton/>
            <HStack  alignItems={"start"}  px={2} w={"100%"}>
                {/*left*/}
                <Box  width={"80%"}>
                        <MonthlySales/>
                    <Box p={3} mt={5}>
                        <Text fontSize={"lg"} fontWeight={"semibold"} color={"g.1"}>
                            Top rated activity
                        </Text>

                        <HStack mt={2} w={"100%"}>
                            <Avatar src={"https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}/>
                            <Text fontSize={"lg"}  color={"g.1"}>Cruise Trip</Text>
                            <Spacer/>
                            <Flex alignItems={"start"} fontSize={"lg"}>
                                4.8
                                <Icon w={6} h={6} color={"#fcd34c"} as={HiStar}/>
                            </Flex>
                        </HStack>
                    </Box>
                </Box>

                {/*right*/}
                <Box  width={"20%"}>
                    <TotalOrders/>
                    <br/>
                    <TotalSales/>
                    <br/>
                    <MonthlyTarget/>
                </Box>

        </HStack>
        </>
    );
};

export default Statistics;