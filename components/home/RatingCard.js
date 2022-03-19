import React from 'react';
import {Avatar, Box, Divider, HStack, Icon, Spacer, Text, VStack} from "@chakra-ui/react";
import {HiStar} from "react-icons/hi";
import Rating from "react-rating";

const RatingCard = () => {
    return (
        <Box mx={10} rounded={"md"} p={4} minW={"600px"} >
                <HStack alignItems={"start"}>
                    <HStack>
                        <Avatar/>
                        <Box><Text color={"g.1"} fontSize={"2xl"}>Omar Alwahhabi</Text>
                            <Rating fractions={2} readonly initialRating={4.5}
                                    emptySymbol={<Icon color={"#dfdfdf"} w={25} h={25} as={HiStar}/>}
                                    fullSymbol={<Icon color={"#fcd34c"} w={25} h={25} as={HiStar}/>}/>
                        </Box>
                    </HStack>
                    <Spacer/>
                    <Text mt={0} color={"gray.600"} fontSize={"lg"}>34 days ago</Text>


                </HStack>
            <Box mt={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio?

            </Box>
            <Divider mt={2}/>
        </Box>
    );
};

export default RatingCard;