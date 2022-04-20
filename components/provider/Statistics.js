import React, {useEffect, useState} from 'react';
import {Avatar, Box, Flex, HStack, Icon, Spacer, Text} from "@chakra-ui/react";
import BackButton from "../BackButton";
import TotalSales from "./statistics/TotalSales";
import MonthlySales from "./statistics/Monthly Sales";
import TotalOrders from "./statistics/TotalOrders";
import {HiStar} from "react-icons/hi";
import MonthlyTarget from "./statistics/MonthlyTarget";
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";

const Statistics = () => {
    const provider = JSON.parse(getCookie("provider"));

    const [orders,setOrders] = useState("")
    const [sales,setSales] = useState("")

    let target = provider.monthly_target_sales;

    target = sales/target*100;



        useEffect(()=> {

        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/get/total_sales',
            params: {
                provider_id: provider._id.$oid
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            setSales(response.data.sales);
            setOrders(response.data.orders);
            console.log(response.data)

        })

            .catch(function (error) {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                }
            })
    })


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
                    <TotalOrders orders={orders}/>
                    <br/>
                    <TotalSales sales={sales}/>
                    <br/>
                    <MonthlyTarget target={target.toFixed(1)}/>
                </Box>

        </HStack>
        </>
    );
};

export default Statistics;