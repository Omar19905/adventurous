import React, {useEffect, useState} from 'react';
import {
    Box, Button,
    Center, CircularProgress,
    Flex,
    HStack,
    Icon,
    Image, Input, Spacer,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Text, useNumberInput
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Rating from 'react-rating';
import {HiOutlineStar, HiStar} from "react-icons/hi";
import RatingsList from "../../components/home/RatingsList";
import Payment from "../../components/home/Payment";
import Review from "../../components/home/Review";
import {checkCookies} from "cookies-next";
import axios from "axios";
import { useRouter } from 'next/router'

const ActivityPage = () => {
    const router = useRouter()
    const {ActivityId} = router.query

    const [total,setTotal] = useState(250)
    const [ratings,setRatings] = useState([])
    const [activity,setActivity] = useState([])
    const [isLoggedin,setIsLoggedin] = useState(checkCookies('user'))
    const [isLoading,setIsLoading] = useState(true)
    const [text,setText] = useState("buy a ticket")
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 5,
            precision: 1,
        })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })

    let quantity = input["aria-valuenow"]

    useEffect(()=>{
        setTotal(quantity*250)
        if (quantity>1)
        setText(`buy ${quantity} tickets`)
        else
            setText("buy a ticket")
    },[input])

    function getRatings(){
        if (!ActivityId) {
            return;
        }
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/get/comments',
            params:{
                activity_id: ActivityId
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            setRatings(response.data)
        })
    }


    useEffect(()=>{
        if (!ActivityId) {
            return;
        }
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/get/comments',
            params:{
                activity_id: ActivityId
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            setRatings(response.data)
        })


        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/get/activity',
            params:{
                activity_id: ActivityId
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            console.log(response.data)
            setActivity(response.data)
            setIsLoading(false)
        })
    },[ActivityId])

    if (isLoading)
        return (
            <>
                <Navbar/>
                <Center bg={"gray.50"}>
                <CircularProgress mt={"9%"} size='100px' thickness='2px' isIndeterminate color='g.2'/>
            </Center>
            </>
        )
    return (
        <>
            <Navbar/>
            <Flex direction={"column"} minH={"100vh"} minW={"100vw"} bg={"gray.50"}>
                <HStack h={"fit-content"} w={"100%"} alignItems={"start"}  mt={14} mx={7}>
                    <Image mt={0}  rounded={"2xl"} w={"550px"}
                          src={activity.picture}/>
                    <Box>
                        <Text fontSize={"6xl"}>{activity.title}</Text>

                        {/*RatingCard*/}
                        <HStack>
                            <Rating fractions={2} readonly initialRating={activity.rating}
                                   emptySymbol={<Icon color={"#dfdfdf"} w={25} h={25} as={HiStar}/>}
                                   fullSymbol={<Icon color={"#fcd34c"} w={25} h={25} as={HiStar}/>}/>
                            <Text>{activity.rating}({ratings.length} {ratings.length>1?"reviews":"review"})</Text>

                        </HStack>

                        {/*Price / date*/}
                        <Stat>
                            <StatNumber>${activity.price}</StatNumber>
                        </Stat>

                        {/*About*/}
                        <Box mr={"2rem"} mt={5} >
                                    <Text mt={2} color={"g.2"} fontSize={"4xl"} fontWeight={"semibold"} >Description </Text>
                            {activity.description}
                        </Box>

                    </Box>


                </HStack>
                {isLoggedin &&<Center>
                    <Flex zIndex={5} alignItems={"center"} rounded={"sm"} p={2} mx={14} position={"fixed"} bottom={5}
                          h={"70px"} w={"55%"} bg={"white"} shadow={"lg"}>
                        <Image rounded={"md"} w={"60px"} h={"60px"} fit={"cover"}
                               src={activity.picture}/>
                        <Text ml={2} fontSize={"xl"}>Hot Air Balloon Ride</Text>
                        <Spacer/>
                        <HStack maxW='180px'>
                            <Button {...inc}>+</Button>
                            <Input {...input} />
                            <Button {...dec}>-</Button>
                        </HStack>
                        <Spacer/>
                        <HStack>
                            <Text>${total}</Text>
                            <Payment activityId={ActivityId} qty={quantity} total={total} text={text}/>
                        </HStack>
                    </Flex>
                </Center>}

                <Box mx={"2rem"} mt={10}>
                    <HStack mb={7} alignItems={"baseline"}>
                        <Text mt={2} color={"g.2"} fontWeight={"bold"} fontSize={"4xl"}>Reviews</Text>
                        {isLoggedin && <Review activityId={ActivityId} getRatings={getRatings} />}
                    </HStack >
                        <RatingsList ratings={ratings}/>
                </Box>

            </Flex>
        </>
    );
};
    export default ActivityPage;