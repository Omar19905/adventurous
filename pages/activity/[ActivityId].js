import React, {useEffect, useState} from 'react';
import {
    Box, Button,
    Center,
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

const ActivityPage = () => {
    const [total,setTotal] = useState(250)
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

    useEffect(()=>{
        let quantity = input["aria-valuenow"]
        setTotal(quantity*250)
        if (quantity>1)
        setText(`buy ${quantity} tickets`)
        else
            setText("buy a ticket")
    },[input])
    return (
        <>
            <Navbar/>
            <Flex direction={"column"} minH={"100vh"} minW={"100vw"} bg={"gray.50"}>
                <HStack h={"fit-content"} w={"100%"} alignItems={"start"}  mt={14} mx={7}>
                    <Image mt={0}  rounded={"2xl"} w={"550px"}
                          src={"https://images.unsplash.com/photo-1604156788872-fa65cd2575f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
                    <Box>
                        <Text fontSize={"6xl"}>Hot Air Balloon Ride</Text>

                        {/*RatingCard*/}
                        <HStack>
                            <Rating fractions={2} readonly initialRating={4.5}
                                   emptySymbol={<Icon color={"#dfdfdf"} w={25} h={25} as={HiStar}/>}
                                   fullSymbol={<Icon color={"#fcd34c"} w={25} h={25} as={HiStar}/>}/>
                            <Text>4.5 (4 reviews)</Text>

                        </HStack>

                        {/*Price / date*/}
                        <Stat>
                            <StatNumber>$250</StatNumber>
                        </Stat>

                        {/*About*/}
                        <Box mr={"2rem"} mt={5} >
                                    <Text mt={2} color={"g.2"} fontSize={"4xl"} fontWeight={"semibold"} >Description </Text>
                            Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eveniet? ipsum dolor sit amet, consectetur adipisicing elit. A animi architecto consectetur ea et ex in incidunt, necessitatibus quas voluptatem. Ad, consequatur corporis dolorem placeat quis sapiente soluta velit veniam?
                        </Box>

                        {/*seats*/}
                        <Box mt={5}>
                            <Text fontSize={"2xl"}>Seats remaining : <Text d={"inline"} color={"g.2"}>5</Text></Text>
                        </Box>
                    </Box>


                </HStack>
                <Center>
                    <Flex zIndex={5} alignItems={"center"} rounded={"sm"} p={2} mx={14} position={"fixed"} bottom={5} h={"70px"} w={"55%"} bg={"white"} shadow={"lg"}>
                    <Image rounded={"md"} w={"60px"} h={"60px"} fit={"cover"} src={"https://images.unsplash.com/photo-1604156788872-fa65cd2575f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
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
                             <Payment total={total} text={text}/>
                        </HStack>
                    </Flex>
                </Center>

                <Box mx={"2rem"} mt={10}>
                    <Text mt={2} color={"g.2"} fontWeight={"bold"} fontSize={"4xl"}>Reviews </Text>
                        <RatingsList/>
                </Box>

            </Flex>
        </>
    );
};

    export default ActivityPage;