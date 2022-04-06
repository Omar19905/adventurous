import React, {useState} from 'react';
import {
    Alert, AlertDescription, AlertIcon, AlertTitle,
    Avatar,
    Box,
    Button, FormControl, FormLabel, HStack,
    Icon, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, PinInput, PinInputField, Radio, RadioGroup, Stack, Text, Textarea, useDisclosure, useToast
} from "@chakra-ui/react";
import {FiSettings} from "react-icons/fi";
import {RiVisaLine} from "react-icons/ri";
import {MdPayment} from "react-icons/md";
import {getCookie} from "cookies-next";
import axios from "axios";
import Lottie from 'react-lottie';
import successful from '../../public/lotties/payment-successful.json';
import {useRouter} from "next/router";
const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successful,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const Payment = ({text,total,qty,activityId}) => {
    let router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [successful,setSuccessful] = useState(false)
    const [isSubmiting,setIsSubmiting] = useState(false)
    const toast = useToast()

    function handleJoinActivity(){
        setIsSubmiting(true)
        let user_cookies = JSON.parse(getCookie("user"))
        let participant_id = user_cookies._id.$oid
        axios({
            method: 'post',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/join_activity',
            data: {
                activity_id: activityId,
                participant_id:participant_id,
                total_price:total,
                qty: qty
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            console.log(response.data)
            setInterval(()=>{
                setSuccessful(true)
            },4000)
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
            <Button _hover={{backgroundColor:"g.2"}} rounded={"3xl"} color={"white"} bg={"g.2"} onClick={onOpen}>
                {text}
            </Button>


            <Modal

                isOpen={isOpen}
                onClose={onClose}
                size={"lg"}
            >
                <ModalOverlay />
                <ModalContent maxW={"600px"} >
                    <ModalHeader display={"flex"} justifyItems={"center"}>
                        <Icon mr={2} w={10} h={10} as={MdPayment}/>
                        Payment
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {!successful&&
                        <>
                            <FormControl>

                                <FormLabel>Card Holder</FormLabel>
                                <Input fontWeight={"semibold"} placeholder='enter caerd holder name'/>
                            </FormControl>

                            <FormControl mt={10}>
                                <FormLabel>Card Number</FormLabel>
                                <HStack px={2} h={"2.5rem"} border='1px' borderColor='gray.200'>
                                    <Icon ml={0} h={9} w={9} as={RiVisaLine}/>
                                    <PinInput size='s'>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>

                                        <Text>-</Text>

                                        <PinInputField border={"none"} fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>

                                        <Text>-</Text>

                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>

                                        <Text>-</Text>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                        <PinInputField fontWeight={"semibold"}/>
                                    </PinInput>
                                </HStack>

                            </FormControl>

                            <HStack mt={10}>
                                <FormLabel minW={"20%"}>Expiry Date</FormLabel>
                                <Input max fontWeight={"semibold"} w={"100px"} placeholder='MM'/>
                                <Text>/</Text>
                                <Input max fontWeight={"semibold"} w={"100px"} placeholder='YY'/>

                            </HStack>

                            <HStack mt={10}>
                                <FormLabel minW={"20%"}>CCV number</FormLabel>
                                <Input fontWeight={"semibold"} w={"100px"} placeholder='3 digits'/>
                            </HStack></>}

                        {successful&&<Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />

                        }
                    </ModalBody>

                    <ModalFooter>


                        {!successful&&<Button
                            onClick={handleJoinActivity}
                            isLoading={isSubmiting}

                            _hover={{backgroundColor: "g.2"}} h={10} w={"90%"} px={10} color={"white"} bg={"g.2"}
                            mx={"auto"}>
                            Pay ${total} now
                        </Button>}
                        {successful&&<Button
                            onClick={()=>router.push("/")}

                            _hover={{backgroundColor: "g.2"}} h={10} w={"90%"} px={10} color={"white"} bg={"g.2"}
                            mx={"auto"}>
                            Home
                        </Button>}

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Payment;