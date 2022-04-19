import React, {useEffect, useState} from 'react';
import {Box, Button, Divider, HStack, Input} from "@chakra-ui/react";
import Select from 'react-select'
import axios from "axios";


import { DatePicker } from 'rsuite';


const Filters = ({setActivities,setIsloading}) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const[city, setCity]=useState("")
    const[category, setCategory]=useState("")
    const [categories, setCategories] = useState([])


    useEffect(() => {
        getCategories()
    }, [])

    function getCategories() {
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

                })

                setCategories(data)
            }

        })
    }

    function getActivities(){

        console.log(city+selectedDay+category)
        setIsloading(true)
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/filter_activity',
            params: {
                city:city,
                category:category,
                date:removeTime(selectedDay)
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            setActivities(response.data)
            setIsloading(false)
        })
    }


    function removeTime(date = new Date()) {
        if (date==null)
            return
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );
    }




    return (
        <>
            <HStack zIndex={"1"} position={"relative"} top={10} ml={10} rounded={"100px"} h={16} shadow={"md"}
                   bg={"white"} w={"85%"} px={6} justify={"center"} mx={"auto"} spacing={10}>
            <Box py={"4px"} w={"50%"}>

                <DatePicker  format={"yyyy-MM-dd"} value={selectedDay} onChange={setSelectedDay}  oneTap placeholder="Select Date" style={{ width: 220 }} />
                {/*<Input onChange={(e)=>setSelectedDay(e.target.value)} placeholder={"Date"} type={"date"}/>*/}

            </Box>



            <Divider h={"60%"} orientation='vertical'/>
            <Box w={"50%"}><Select           isClearable={true}
                                             onChange={(e) => {
                                                 if (e == null){
                                                     setCity(null)
                                                 }
                                                 else
                                                     setCity(e.value)
                                             }}
                                              placeholder={"Region"} options={regions}/></Box>
            {/*<Select placeholder={"Type of Activity"}  w={"50%"} border={"none"} >*/}
            {/*    <option onClick={console.log("hi")}  value='option1'>Option1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*</Select>*/}
            <Divider h={"60%"} orientation='vertical'/>
            <Box w={"50%"}><Select isClearable={true}
                                   onChange={(e) => {
                                       if (e == null)
                                           setCategory(null)
                                       else
                                           setCategory(e.value)
                                   }}

                                   placeholder={"Category"} options={categories}/></Box>
            {/*<Select placeholder='City' w={"50%"} border={"none"} >*/}
            {/*    <option onClick={console.log("hi")}  value='option1'>Option1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*    <option value='option1'>Option 1</option>*/}
            {/*</Select>*/}
            <Button onClick={getActivities} _hover={{backgroundColor: "g.2"}} color={"white"} bg={"g.2"} rounded={"3xl"} w={"35%"}>
                Discover                Activities
            </Button>

        </HStack>


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

export default Filters;