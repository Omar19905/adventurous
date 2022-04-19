import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, FormLabel, Input, useToast} from "@chakra-ui/react";
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";
import BackButton from "../BackButton";

const SendNotifications = () => {

    const toast = useToast()

    const [title,setTitle]=useState()
    const [body,setBody]= useState()
    const [isLoading,setIsLoading] = useState(false);

    function send() {
        setIsLoading(true)
        let provider_cookies = JSON.parse(getCookie("provider"))
        console.log(provider_cookies._id.$oid)
        console.log(title)
        console.log(body)


        axios({
            method: 'post',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/provider/send_notification',
            data: {
                provider_id: provider_cookies._id.$oid,
                title: title,
                body:body
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            setIsLoading(false)
            console.log(response.data)
            toast({
                title: 'Success',
                position:"top-right",
                description: "notification has been sent successfully",
                status: 'success',
                duration: 8000,
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



    return (
        <>
            <BackButton/>
            <Box mt={10} mx={"auto"} maxW={"50%"}>
                <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </FormControl>

                <FormControl id="title" isRequired>
                    <FormLabel>Body</FormLabel>
                    <Input type="text" onChange={(e) => setBody(e.target.value)}/>
                </FormControl>

                <Button disabled={isLoading} isLoading={isLoading} onClick={()=>{
                    send()

                }} _hover={{backgroundColor:"g.2",color:"white"}} maxW={"50%"} mx={"auto"} px={50}  mt={10} bg={"g.2"}
                        color={"white"}>Send</Button>
            </Box>
        </>
    );
};

export default SendNotifications;