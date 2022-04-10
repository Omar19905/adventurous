import React, {useEffect, useState} from 'react';
import {
    Alert, AlertDescription, AlertIcon, AlertTitle,
    Avatar,
    Button, FormControl, FormLabel,
    Icon, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Radio, RadioGroup, Stack, Textarea, useDisclosure, useToast
} from "@chakra-ui/react";
import {BiCommentAdd} from "react-icons/bi";
import Rating from 'react-rating';
import {HiStar} from "react-icons/hi";
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";

const Review = ({getRatings,activityId}) => {
    let audio = new Audio("/success.mp3")
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [rating,setRating] = useState(0)
    const [isValid,setIsValid] = useState(false)
    const [comment,setComment] = useState("")


    function handleCommentChange  (e) {
        setComment(e.target.value);
    }

    useEffect(()=>{
        if (comment.length>0)
            setIsValid(true)
        else
            setIsValid(false)
    },[comment])

    function handleSubmit(e) {
        let user_cookies = JSON.parse(getCookie("user"))
        let commenter_id = user_cookies._id.$oid
        axios({
            method: 'post',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/post/comment',
            data: {
                commenter_id: commenter_id,
                activity_id: activityId,
                comment: comment,
                rating :rating
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            audio.play()
            toast({
                title: 'Review added',
                position:"top-right",
                description: "your review added successfully.",
                status: 'success',
                duration: 8000,
                isClosable: true,
            })
            getRatings()
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
            <Button ml={5} fontSize={"lg"}  bg={"transparent"} border={"2px solid "} color={"g.1"} onClick={onOpen}>
                <Icon mr={2} w={5} h={5} as={BiCommentAdd}/>
                Write a review
            </Button>


            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={"lg"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Your review
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl w={"100%"}>
                            <FormLabel  fontSize={"xl"}>Rating</FormLabel>
                            <Rating onChange={(value)=>setRating(value)}  fractions={1}  initialRating={rating}
                                    emptySymbol={<Icon color={"#dfdfdf"} w={35} h={35} as={HiStar}/>}
                                    fullSymbol={<Icon color={"#fcd34c"} w={35} h={35} as={HiStar}/>}/>
                        </FormControl>
                        {labels[rating]}


                        <FormControl w={250} id="comment">
                            <FormLabel  fontSize={"xl"}>Comment</FormLabel>
                            <Textarea onChange={handleCommentChange} w={"390px"} h={"130px"} size={"md"}/>
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>


                        <Button
                            onClick={()=>{
                                handleSubmit()
                                onClose()
                                getRatings()


                            }}
                            disabled={!isValid}
                            _hover={{backgroundColor:"g.2"}} h={8} px={10} color={"white"} bg={"g.2"} mr={3}>
                            Add review
                        </Button>
                        <Button h={8} px={10} variant={"outline"}  onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

const labels = {
    5:"Excellent",
    4:"Good",
    3:"Average",
    2:"Poor",
    1:"Very poor"
}
export default Review;