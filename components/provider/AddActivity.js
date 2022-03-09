import React from 'react';
import {Box, Button, FormControl, FormLabel, HStack, Icon, Input, Text, Textarea} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {FiChevronsLeft} from 'react-icons/fi'
import BackButton from "../BackButton";

const AddActivity = () => {


    return (

        <>
            <BackButton/>
            <Box mt={0} ml={"50px"}>
            <Text mb={6} fontWeight={"bold"} fontSize={"2xl"}>Add Activity</Text>
            <HStack spacing={10}>
                <FormControl w={250} id="title" isRequired>
                    <FormLabel fontSize={"xl"}>Title</FormLabel>
                    <Input type="text"/>
                </FormControl>
                <FormControl w={250} id="price" isRequired>
                    <FormLabel fontSize={"xl"}>Price</FormLabel>
                    <Input type="number"/>
                </FormControl>
                <FormControl w={250} id="date" isRequired>
                    <FormLabel fontSize={"xl"}>Date</FormLabel>
                    <Input type="date"/>
                </FormControl>
            </HStack>

                <HStack spacing={10} mt={5}>
                    <FormControl w={250} id="city" isRequired>
                    <FormLabel fontSize={"xl"}>City</FormLabel>
                    <Input type="text"/>
                </FormControl>
                    <FormControl w={250} id="picture" isRequired>
                    <FormLabel fontSize={"xl"}>Picture</FormLabel>
                    <Input w={"550px"} type="text"/>
                </FormControl>

                </HStack>

                <FormControl w={250} id="city" isRequired>
                    <FormLabel  fontSize={"xl"}>Description</FormLabel>
                    <Textarea h={"130px"} w={"500px"} size={"md"}/>
                </FormControl>


                <Button _hover={{backgroundColor:"#b2ab37",color:"white"}} px={25} position={"absolute"} bottom={10} right={10} bg={"transparent" } border={"solid 2px #b2ab37"} color={"g.2"}>Add Activity</Button>

        </Box>
        </>
    );
};

export default AddActivity;