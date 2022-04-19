import React, {useEffect, useState} from 'react';
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
import Select from "react-select";
import { DatePicker } from 'rsuite';


const AddActivity = ({getActivities}) => {
    const router = useRouter()
    const toast = useToast()

    const [title, setTitle] = useState("");
    const[isLoading,setIsloading]=useState(false)
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState(null);
    const [categories, setCategories] = useState([]);
    const [price, setPrice] = useState("");
    const [show, setShow] = useState(false);
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
                    label: options[i].name
                })

                setCategories(data)
            }

        })

    },[])
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
        setIsloading(true)
            let provider_cookies = JSON.parse(getCookie("provider"))
            console.log(provider_cookies._id.$oid)

            axios({
                method: 'post',
                url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/Activity/add',
                data: {
                    activity_provider_id: provider_cookies._id.$oid,
                    title:title,
                    description:description,
                    picture:picture,
                    city:city,
                    date:removeTime(date),
                    category:selectedCategory,
                    price:price
                },
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }

            }).then(function (response) {
                setIsloading(false)
                router.push('/provider/dashboard', undefined, {shallow: true})
                getActivities()

                toast({
                    title: 'Activity added',
                    position:"top-right",
                    description: "your activity added successfully.",
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

    function removeTime(date = new Date()) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );
    }

    return (

        <>
            <BackButton/>
            <Box mt={0} ml={"50px"}>
                <Center><Text mx={"auto"} mb={6} fontWeight={"semibold"} color={"g.1"} fontSize={"2xl"}>Add Activity</Text></Center>
            <HStack spacing={10}>
                <FormControl  id="title" isRequired>
                    <FormLabel fontSize={"xl"}>Title</FormLabel>
                    <Input onChange={handleTitleChange} type="text"/>
                </FormControl>
                <FormControl  id="price" isRequired>
                    <FormLabel fontSize={"xl"}>Price</FormLabel>
                    <Input onChange={handlePriceChange} type="number"/>
                </FormControl>
                <FormControl  id="category" isRequired>
                    <FormLabel fontSize={"xl"}>Category</FormLabel>
                    <Select defaultValue={setSelectedCategory} onChange={(e) => setSelectedCategory(e.value)}
                            placeholder={"Category"} options={categories}/>
                </FormControl>
                <FormControl  id="date" isRequired>
                    <FormLabel fontSize={"xl"}>Date</FormLabel>
                    {/*<Input onChange={handleDateChange} type="date"/>*/}
                    <DatePicker format={"yyyy-MM-dd"} isoWeek value={date} onChange={setDate}  oneTap placeholder="Select Date" style={{ width: 200 }} />

                </FormControl>
            </HStack>

                <HStack spacing={10} mt={5}>
                    <FormControl w={250} id="city" isRequired>
                    <FormLabel fontSize={"xl"}>City</FormLabel>
                        <Select onChange={(city)=>setCity(city.value)} placeholder={"city"} options={regions}/>
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


                <Button disabled={isLoading} isLoading={isLoading} onClick={()=>{
                    handleSubmit()

                }} _hover={{backgroundColor:"g.2",color:"white"}} px={25} position={"absolute"} bottom={10} right={10} bg={"g.2"}
                        color={"white"}>Add Activity</Button>
        </Box>
        </>
    );
};
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

export default AddActivity;