import React, {useEffect, useState} from 'react';

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Text,
    Textarea,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import BackButton from "../BackButton";
import Select from "react-select";
import axios from "axios";
import {getCookie} from "cookies-next";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {FiEdit} from "react-icons/fi";
import {DatePicker} from "rsuite";

const EditActivity = ({activity,getActivities}) => {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [city, setCity] = useState()
    const [date, setDate] = useState()
    const [picture, setPicture] = useState()
    const [description, setDescription] = useState("");
    const toast = useToast()

    const [categories,setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState("")
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/admin/get_categories',
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            let options = response.data
            let data = []
            for (let i = 0; i < options.length; i++) {
                data.push({
                    value: options[i].name,
                    label: options[i].name,
                    planeId: options[i].name,

                })

                setCategories(data)
            }

        })

    },[activity])

    function handleSubmit(){
        let provider_cookies = JSON.parse(getCookie("provider"))

        console.log(provider_cookies._id.$oid)
        console.log(title)
        console.log(picture)
        console.log(city)
        console.log(date)
        console.log(selectedCategory)
        console.log(price)
        axios({
            method: 'put',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/edit/activity',
            data: {
                activity_id: activity._id.$oid,
                title:title,
                description:description,
                picture:picture,
                city:city,
                date:removeTime(date),
                category:selectedCategory,
                price:price
            },headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
        }).then(function (response) {
            getActivities()
            toast({
                title: 'Activity edited',
                position:"top-right",
                description: "your activity added successfully.",
                status: 'info',
                duration: 8000,
                isClosable: true,
            })
        })

    }


    const handleTitleChange = (event) => setTitle(event.target.value)
    const handlePriceChange = (event) => setPrice(event.target.value)
    const handleCategoryChange = (event) => setSelectedCategory(event.target.value)

    useEffect(()=>{
        setTitle(activity.title)
        setPrice(activity.price)
        setSelectedCategory(activity.category)
        setDate(activity.date)
        setCity(activity.city)
        setPicture(activity.picture)
        setDescription(activity.description)

    },[])


    function removeTime(date = new Date()) {
        if (date==null)
            return
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );
    }
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box _hover={{backgroundColor:"gray.100"}} cursor={"pointer"} py={1} px={4} color={"g.1"} fontWeight={"semibold"} onClick={onOpen}>
                <Icon  pr={1} as={FiEdit} color={"g.2"} w={6} h={6}/>
                Edit Activity
            </Box>

            <Modal  size={"5xl"} isOpen={isOpen} onClose={onClose}>

                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Edit Activity</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody >
                        <Box mt={5} ml={"50px"}>
                                <HStack mx={2} spacing={10}>
                                <FormControl  id="title" isRequired>
                                    <FormLabel fontSize={"xl"}>Title</FormLabel>
                                    <Input onChange={handleTitleChange} value={title} type="text"/>
                                </FormControl>
                                <FormControl id="price" isRequired>
                                    <FormLabel fontSize={"xl"}>Price</FormLabel>
                                    <Input onChange={handlePriceChange} value={price} type="number"/>
                                </FormControl>
                                <FormControl  id="category" isRequired>
                                    <FormLabel fontSize={"xl"}>Category</FormLabel>
                                    <Select  defaultValue={{ label: selectedCategory }}  onChange={(e) => setSelectedCategory(e.value)}
                                            placeholder={"Category"} options={categories}/>
                                </FormControl>
                                <FormControl zIndex={100}  id="date" isRequired>
                                    <FormLabel fontSize={"xl"}>Date</FormLabel>
                                    {/*<DatePicker  format={"yyyy-MM-dd"} value={date} onChange={setDate}  oneTap placeholder="Select Date" style={{ width: 220 }} />*/}
                                    <DatePicker  format={"yyyy-MM-dd"} defaultValue={new Date(activity.date)} onChange={setDate}  oneTap placeholder="Select Date" style={{ width: 220 }} />

                                </FormControl>
                            </HStack>

                            <HStack spacing={10} mt={5}>
                                <FormControl w={250} id="city" isRequired>
                                    <FormLabel fontSize={"xl"}>City</FormLabel>
                                    <Select defaultValue={{ label: city }} onChange={(city)=>setCity(city.value)} placeholder={"city"} options={regions}/>
                                </FormControl>

                                <FormControl w={250} id="picture" isRequired>
                                    <FormLabel fontSize={"xl"}>Picture</FormLabel>
                                    <Input value={picture} onChange={(e)=>setPicture(e.target.value)} w={"550px"} type="text"/>
                                </FormControl>

                            </HStack>


                            <FormControl mt={5} w={250} id="city" isRequired>
                                <FormLabel  fontSize={"xl"}>Description</FormLabel>
                                <Textarea value={description} onChange={(e)=>setDescription(e.target.value)} h={"130px"} w={"500px"} size={"md"}/>
                            </FormControl>

                            <Button onClick={handleSubmit} _hover={{backgroundColor:"g.2",color:"white"}} px={50} position={"absolute"} bottom={10} right={10} variant={"outline"} color={"g.2"}>Save</Button>

                        </Box>

                    </ModalBody>
                </ModalContent>
            </Modal>

        </>

    );
}

const regions = [
    {

        value: "Riyadh",
        label: "Riyadh"

    },
    {

        value: "Makkah",
        label: "Makkah",

    },
    {

        value: "Madinah",
        label: "Madinah",

    },
    {

        value: "Qassim",
        label: "Qassim",
    },
    {

        value: "Eastern Province",
        label: "Eastern Province",
    },
    {

        value: "Asir",
        label: "Asir",
    },
    {

        value: "Tabuk",
        label: "Tabuk",

    },
    {

        value: "Hail",
        label: "Hail",

    },
    {


        value: "Northern Borders",
        label: "Northern Borders",

    },
    {

        value: "Jazan",
        label: "Jazan",

    },
    {

        value: "Najran",
        label: "Najran",
    },
    {
        value: "Bahah",
        label: "Bahah",
    },
    {
        value: "Jawf",
        label: "Jawf",
    }
]


export default EditActivity;