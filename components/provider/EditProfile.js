import React, {useEffect, useState} from 'react';
import BackButton from "../BackButton";
import {Box, Button, FormControl, FormLabel, HStack, Input, Text, Textarea, useToast} from "@chakra-ui/react";
import {getCookie, setCookies} from "cookies-next";
import axios from "axios";

const EditProfile = () => {
    const toast = useToast()

    const provider = JSON.parse(getCookie("provider"));
    const [CName,setCName]= useState("")
    const [logo,setLogo]= useState("")
    const [email,setEmail]= useState("")
    const [target,setTarget]= useState("")

    const handleCNameChange = (event) => {
        setCName(event.target.value)
    }
    const handleLogoChange = (event) => {
        setLogo(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleTargetChange = (event) => {
        setTarget(event.target.value)
    }

    function handleSubmit(){

        console.log(provider._id.$oid)
        console.log(CName)
        console.log(logo)
        console.log(target)
        console.log(email)
        axios({
            method: 'put',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/edit/provider_account',
            data: {
                provider_id: provider._id.$ioid,
                company_name:CName,
                logo: logo,
                email: email,
                monthly_target_sales: target
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            setCookies('provider', JSON.stringify(response.data));
            toast({
                title: 'Success',
                position:"top-right",
                description: "Account settings updated successfully.",
                status: 'success',
                duration: 7000,
                isClosable: true,
            })

        }).catch(function (error) {

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
            }
        })
    }

    useEffect(()=>{
        console.log(provider)
        setCName(provider.company_name)
        setEmail(provider.email)
        setLogo(provider.logo)
    },[])

    return (
        <>
            <BackButton/>
            <Box mt={5} ml={"50px"}>
                <Text mb={6} fontWeight={"bold"} fontSize={"2xl"}>Edit Profile</Text>
                <HStack mx={2} spacing={10}>
                    <FormControl  id="title" >
                        <FormLabel fontSize={"xl"}>Company Name:</FormLabel>
                        <Input onChange={handleCNameChange} value={CName} type="text"/>
                    </FormControl>

                    <FormControl  id="email" isRequired>
                        <FormLabel fontSize={"xl"}>Email</FormLabel>
                        <Input onChange={handleEmailChange} value={email} type="text"/>
                    </FormControl>

                </HStack>


                <HStack  spacing={10} mx={5} mt={5}>
                    <FormControl id="logo" >
                        <FormLabel fontSize={"xl"}>Logo</FormLabel>
                        <Input onChange={handleLogoChange} value={logo} type="text"/>
                    </FormControl>

                    <FormControl  id="target" isRequired>
                        <FormLabel fontSize={"xl"}>Monthly Target Sales</FormLabel>
                        <Input onChange={handleTargetChange} value={target} type="number"/>
                    </FormControl>

                </HStack>


                <Button onClick={handleSubmit} _hover={{backgroundColor:"g.2",color:"white"}} color={"white"} px={50} position={"absolute"} bottom={10} right={10}  bg={"g.2"}>Save</Button>

            </Box>
        </>
    );
};

export default EditProfile;