import React, {useEffect, useState} from 'react';
import SideMenu from "../../components/admin/SideMenu";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Spacer,
    useToast,
    VStack
} from "@chakra-ui/react";
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";
import ActivityCard from "../../components/home/ActivityCard";
import {TiDelete} from "react-icons/ti";

const Categories = () => {
    const toast = useToast()

    const [category,setCategory] = useState()
    const [categories,setCategories] = useState([])
    const categoriesList= categories.map((category,index) => (
        <div key={index}>
            <Flex px={4} direction={"row"} textAlign={"left"} fontSize={"xl"} fontWeight={"semibold"} color={"g.1"} bg={"gray.200"} rounded={"lg"} w={"250px"} h={10}>
                {category.name}
                <Spacer/>
                <Box cursor={"pointer"} onClick={()=>{
                    handleDeleteCategory(category._id.$oid)
                }}>
                    <Icon w={5} h={5} mt={2}  as={TiDelete}/>
                </Box>
            </Flex>
        </div>
    ))

    function handleCategoryChange(e){
        setCategory(e.target.value);
    }

    function handleDeleteCategory(id){
        axios({
            method: 'delete',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/admin/delete_category',
            data: {
                category_id: id
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            getCategories()
            toast({
                title: 'Success',
                position:"top-right",
                description: "category deleted successfully.",
                status: 'info',
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

    function handleSubmit(e) {
        axios({
            method: 'post',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/admin/add_category',
            data: {
                category_name: category
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            getCategories()
            audio.play()
            toast({
                title: 'Success',
                position:"top-right",
                description: "category added successfully.",
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
        getCategories()
    },[])
    function getCategories(){
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/admin/get_categories',
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(function (response) {
            console.log(response.data)
            setCategories(response.data)
        })
    }

    return (
        <>
            <SideMenu/>
            <Box p={20} bg={"gray.50"} ml={"21%"}>
                <FormControl id="Category" >
                    <FormLabel fontSize={"xl"} fontWeight={"semibold"} color={"g.2"}>Category</FormLabel>
                    <Input w={"30%"} type="text"  onChange={handleCategoryChange} />
                    <Button onClick={handleSubmit} px={16} color={"white"} ml={8} bg={"g.2"}>Add</Button>
                </FormControl>

<VStack mt={5} alignItems={"start"} >
    {categoriesList}
</VStack>


            </Box>
        </>
    );
};

export default Categories;