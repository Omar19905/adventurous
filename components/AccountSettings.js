import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    Stack,
    RadioGroup,
    useDisclosure,
    Textarea,
    Avatar,
    Icon,
    useToast,
    Alert,
    AlertIcon,
    AlertTitle, AlertDescription
} from "@chakra-ui/react";
import {FiClipboard, FiSettings} from "react-icons/fi";
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";
import {MdOutlineManageAccounts} from "react-icons/md";



const AccountSettings = ({user,setUser}) => {
    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [username, setUserName] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [picture, setPicture] = useState(user.profileImage)
    const [sex, setSex] = useState(user.sex)
    const [bio, setBio] = useState(user.bio)
    const[isSubmitting,setIsSubmitting] = useState(false)
    const[error,setError] = useState("")
    const[success,setSuccess] = useState("")


    function onEmailChange  (e) {
        setEmail(e.target.value);
        console.log(e.target.value)

    }



    function onUsernameChange  (e) {
        setUserName(e.target.value);
        console.log(e.target.value)
    }

    function onBioChange  (e) {
        setBio(e.target.value);
    }
    function onPictureChange  (e) {
        setPicture(e.target.value);
    }

    function handleSubmit(e) {
        setIsSubmitting(true);
        axios({
            method: 'put',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/edit_profile',
            data: {
                user_id: user._id.$oid,
                email: email,
                username:username,
                bio:bio,
                sex:sex,
                profileImage:picture
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            console.log(response.data)
            setCookies('user', JSON.stringify(response.data));
            setUser(JSON.parse(getCookie("user")))
            console.log(user.user_id);
            setIsSubmitting(false);
            toast({
                title: 'Success',
                position:"top-right",
                description: "Account settings updated  successfully.",
                status: 'success',
                duration: 7000,
                isClosable: true,
            })


        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                setError(error.response.data.status);
                setIsSubmitting(false)
            }
        })
    }


useEffect(()=>{
    setSuccess("");
},[])

    return (
        <>
            <Button mt={2} color={"g.1"} width={"100%"} onClick={onOpen}>
                <Icon ml={6} w={6} h={6} mr={3} as={MdOutlineManageAccounts}  />
                Account Settings
            </Button>


            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={"lg"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Avatar src={picture} mr={2} size={"sm"}/>
                        Edit your account
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>

                            <FormLabel>User name</FormLabel>
                            <Input onChange={onUsernameChange}  placeholder='username' value={username} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input onChange={onEmailChange} placeholder='email' value={email} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Picture</FormLabel>
                            <Input onChange={onPictureChange} value={picture} placeholder='https://placeholder.com' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Sex</FormLabel>
                            <RadioGroup onChange={setSex} value={sex}>
                                <Stack direction='row'>
                                    <Radio colorScheme={"blue"} value='M'>Male</Radio>
                                    <Radio colorScheme={"pink"} value='F'>Female</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl w={250} id="bio">
                            <FormLabel  fontSize={"xl"}>Bio</FormLabel>
                            <Textarea onChange={onBioChange} value={bio} h={"130px"} size={"md"}/>
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>


                        <Button
                            isLoading={isSubmitting}
                            onClick={handleSubmit}

                            _hover={{backgroundColor:"g.2"}} h={8} px={10} color={"white"} bg={"g.2"} mr={3}>
                            Save
                        </Button>
                        <Button h={8} px={10} variant={"outline"}  onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AccountSettings;