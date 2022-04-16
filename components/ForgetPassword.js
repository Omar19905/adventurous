import React, {useEffect, useState} from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Text,
    Stack,
    Input,
    ButtonGroup,
    useDisclosure,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, FormLabel, FormControl,
} from '@chakra-ui/react'
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";
const ForgetPassword = ({type}) => {

    const { onOpen, onClose, isOpen } = useDisclosure()
    const[isLoading,setIsloading]=useState(false)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    useEffect(()=>{
        console.log(email)
        console.log(password)

    },[email,password])

    function handleEmailChange  (e) {
        setEmail(e.target.value);
    }


    function handlePasswordChange  (e) {
        setPassword(e.target.value);
    }



    function handleSubmit() {
        setIsloading(true);
        setError("");
        setSuccess("")
        console.log(email)
        console.log(password)
        console.log(type)
        axios({
            method: 'post',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/forgot_password',
            data: {
                "new-password": password,
                email: email,
                type:type
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            setIsloading(false)
            setSuccess(response.data.status);
            console.log(response.data)


        }).catch(function (error) {
            if (error.response) {
                setIsloading(false)

                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                setError(error.response.data.status);
            }
        })
    }

    return (
        <Popover  placement={"top"}>
            <PopoverTrigger>
                <Text ml={2} cursor={"pointer"} d={"inline"} color={"g.2"} >Click here</Text>
            </PopoverTrigger>
            <PopoverContent size={"5xl"}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Reset Password</PopoverHeader>
                <PopoverBody>
                    <Stack spacing={4}>
                        {success!=="" && <Alert status='success'>
                            <AlertIcon/>
                            <AlertTitle mr={2}>success !</AlertTitle>
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>}
                        {error!=="" && <Alert status='error'>
                            <AlertIcon/>
                            <AlertTitle mr={2}>failed !</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>}
                        <FormControl id="email" >
                            <FormLabel>Email</FormLabel>
                            <Input type="text" onChange={handleEmailChange} />
                        </FormControl>

                        <FormControl id="password" >
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={handlePasswordChange} />
                        </FormControl>

                        <ButtonGroup d='flex' justifyContent='flex-end'>
                            <Button onClick={handleSubmit} _hover={{backgroundColor:"g.2"}} isLoading={isLoading} color={"white"} bg={"g.2"}>
                                reset
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default ForgetPassword;