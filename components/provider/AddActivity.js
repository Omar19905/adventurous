import React, {useState} from 'react';
import {
    Alert, AlertIcon,
    Box,
    Button, Center,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Text,
    Textarea,
    useToast
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {FiChevronsLeft} from 'react-icons/fi'
import BackButton from "../BackButton";
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";
import {useRouter} from "next/router";

const AddActivity = () => {
    const router = useRouter()
    const toast = useToast()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [show, setShow] = useState(false);

    const id = 'test-toast'

    function handleTitleChange  (e) {
        setTitle(e.target.value);
    }
    function handleDescriptionChange  (e) {
        setDescription(e.target.value);
    }
    function handlePictureChange  (e) {
        setPicture(e.target.value);
    }
    function handleCityChange  (e) {
        setCity(e.target.value);
    }
    function handleDateChange  (e) {
        setDate(e.target.value);
    }
    function handleCategoryChange  (e) {
        setCategory(e.target.value);
    }
    function handlePriceChange  (e) {
        setPrice(e.target.value);
    }


        function handleSubmit(e) {
            let provider_cookies = JSON.parse(getCookie("provider"))
            console.log(provider_cookies._id.$oid)

            axios({
                method: 'put',
                url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/Activity/add',
                data: {
                    activity_provider_id: provider_cookies._id.$oid,
                    title:title,
                    description:description,
                    picture:picture,
                    city:city,
                    date:date,
                    category:category,
                    price:price
                },
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }

            }).then(function (response) {
                console.log(response.data)
                setShow(true)
                setInterval(() => {
                    setShow(false)
                }, 4000);
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);

                }
            })
        }


function test (){
    setShow(true)
    setInterval(() => {
        setShow(false)
    }, 4000);
    }

    return (

        <>
            {show && <Alert w={"fit-content"} h={20} rounded={"md"} top={10} right={"-1"} position={"fixed"} status='success' variant='solid'>
                <AlertIcon />
                <Text fontWeight={"semibold"} color={"white"}>Activity added successfully!</Text>
            </Alert>}
            <BackButton/>
            <Box mt={0} ml={"50px"}>
                <Center><Text mx={"auto"} mb={6} fontWeight={"semibold"} color={"g.1"} fontSize={"2xl"}>Add Activity</Text></Center>
            <HStack spacing={10}>
                <FormControl w={250} id="title" isRequired>
                    <FormLabel fontSize={"xl"}>Title</FormLabel>
                    <Input onChange={handleTitleChange} type="text"/>
                </FormControl>
                <FormControl w={250} id="price" isRequired>
                    <FormLabel fontSize={"xl"}>Price</FormLabel>
                    <Input onChange={handlePriceChange} type="number"/>
                </FormControl>
                <FormControl w={250} id="date" isRequired>
                    <FormLabel fontSize={"xl"}>Date</FormLabel>
                    <Input onChange={handleDateChange} type="date"/>
                </FormControl>
            </HStack>

                <HStack spacing={10} mt={5}>
                    <FormControl w={250} id="city" isRequired>
                    <FormLabel fontSize={"xl"}>City</FormLabel>
                    <Input onChange={handleCityChange} type="text"/>
                </FormControl>
                    <FormControl w={250} id="picture" isRequired>
                    <FormLabel fontSize={"xl"}>Picture</FormLabel>
                    <Input overflow={"hidden"} onChange={handlePictureChange} w={"550px"} type="text"/>
                </FormControl>

                </HStack>

                <FormControl w={250} id="Description" isRequired>
                    <FormLabel  fontSize={"xl"}>Description</FormLabel>
                    <Textarea onChange={handleDescriptionChange} h={"130px"} w={"500px"} size={"md"}/>
                </FormControl>


                <Button onClick={handleSubmit} _hover={{backgroundColor:"g.2",color:"white"}} px={25} position={"absolute"} bottom={10} right={10} bg={"g.2"}
                        color={"white"}>Add Activity</Button>
        </Box>
        </>
    );
};

export default AddActivity;