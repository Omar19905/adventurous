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
    ModalOverlay, Radio, RadioGroup, Stack, Textarea, useDisclosure
} from "@chakra-ui/react";
import {BiCommentAdd} from "react-icons/bi";
import Rating from 'react-rating';
import {HiStar} from "react-icons/hi";

const Review = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [rating,setRating] = useState(0)


    return (
        <>
            <Button fontSize={"lg"} bg={"transparent"} border={"4px solid g.1"} color={"g.1"} onClick={onOpen}>
                <Icon mr={2} w={5} h={5} as={BiCommentAdd}/>
                Give feedback
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
                            <Textarea w={"390px"} h={"130px"} size={"md"}/>
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>


                        <Button
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