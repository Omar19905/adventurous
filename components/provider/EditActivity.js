import React, {useEffect, useState} from 'react';

import {Box, Button, FormControl, FormLabel, HStack, Input, Text, Textarea} from "@chakra-ui/react";
import BackButton from "../BackButton";

const EditActivity = ({activity}) => {
    const [title, setTitle] = useState(activity.username)
    const handleTitleChange = (event) => setTitle(event.target.value)
    console.log(activity)

    useEffect(()=>{
        setTitle(activity.username)
    },[activity])
    return (
        <>
            <BackButton/>
            <Box mt={5} ml={"50px"}>
                <Text mb={6} fontWeight={"bold"} fontSize={"2xl"}>Edit Activity {activity.id}</Text>
                <HStack mx={2} spacing={10}>
                    <FormControl  id="title" isRequired>
                        <FormLabel fontSize={"xl"}>Title</FormLabel>
                        <Input onChange={handleTitleChange} value={title} type="text"/>
                    </FormControl>
                    <FormControl id="price" isRequired>
                        <FormLabel fontSize={"xl"}>Price</FormLabel>
                        <Input type="number"/>
                    </FormControl>
                    <FormControl  id="category" isRequired>
                        <FormLabel fontSize={"xl"}>Category</FormLabel>
                        <Input type={"url"}/>
                    </FormControl>
                    <FormControl  id="date" isRequired>
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

                <Button _hover={{backgroundColor:"g.2",color:"white"}} px={50} position={"absolute"} bottom={10} right={10} variant={"outline"} color={"g.2"}>Save</Button>

            </Box>
        </>

    );
};

export default EditActivity;