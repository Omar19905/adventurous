import React, {useState} from 'react';
import {Box, Button, Divider, HStack, Input} from "@chakra-ui/react";
import Select from 'react-select'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Filters = () => {
    const [selectedDay, setSelectedDay] = useState(null);


    return (
        <HStack zIndex={"1"} position={"relative"} top={10} ml={10} rounded={"100px"}  h={16} shadow={"md"} bg={"white"} w={"85%"} px={6} justify={"center"} mx={"auto"} spacing={10}>
            <Box py={"4px"}  w={"50%"}>


                <Input placeholder={"Date"} type={"date"}/>

            </Box>
            {/*<Select placeholder={"Date"} w={"50%"} border={"none"} >*/}
            {/*    <option onClick={console.log("hi")}  value='option1'>Option1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*</Select>*/}

            <Divider h={"60%"} orientation='vertical' />
            <Box w={"50%"}><Select placeholder={"Region"} options={regions}/></Box>
            {/*<Select placeholder={"Type of Activity"}  w={"50%"} border={"none"} >*/}
            {/*    <option onClick={console.log("hi")}  value='option1'>Option1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*</Select>*/}
            <Divider h={"60%"} orientation='vertical' />
            <Box w={"50%"}><Select placeholder={"Category"} options={options}/></Box>
            {/*<Select placeholder='City' w={"50%"} border={"none"} >*/}
            {/*    <option onClick={console.log("hi")}  value='option1'>Option1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*</Select>*/}
            <Button _hover={{backgroundColor:"g.1"}}  color={"white"} bg={"g.2"} rounded={"3xl"} w={"35%"}>Discover Activities</Button>

        </HStack>

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

export default Filters;