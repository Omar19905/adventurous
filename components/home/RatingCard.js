import React from 'react';
import {Avatar, Box, Divider, HStack, Icon, Spacer, Text, VStack} from "@chakra-ui/react";
import {HiStar} from "react-icons/hi";
import Rating from "react-rating";
import Moment from "react-moment";

const RatingCard = ({rating}) => {
    console.table(rating)
    return (
        <Box mx={10} rounded={"md"} p={4} minW={"600px"} >
                <HStack alignItems={"start"}>
                    <HStack>
                        <Avatar/>
                        <Box><Text color={"g.1"} fontSize={"2xl"}>{rating.commenter_name}</Text>
                            <Rating fractions={2} readonly initialRating={rating.rating}
                                    emptySymbol={<Icon color={"#dfdfdf"} w={25} h={25} as={HiStar}/>}
                                    fullSymbol={<Icon color={"#fcd34c"} w={25} h={25} as={HiStar}/>}/>
                        </Box>
                    </HStack>
                    <Spacer/>
                    <Text mt={0} color={"gray.600"} fontSize={"lg"}>
                        <Moment fromNow>{rating.created_at}</Moment>
                    </Text>


                </HStack>
            <Box mt={5}>
                {rating.comment}

            </Box>
            <Divider mt={2}/>
        </Box>
    );
};

export default RatingCard;