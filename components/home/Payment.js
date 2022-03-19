import React from 'react';
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
    ModalOverlay, PinInput, PinInputField, Radio, RadioGroup, Stack, Text, Textarea, useDisclosure
} from "@chakra-ui/react";
import {FiSettings} from "react-icons/fi";
import {RiVisaLine} from "react-icons/ri";
import {MdPayment} from "react-icons/md";

const Payment = ({text,total}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                        <FormControl>

                            <FormLabel>Card Holder</FormLabel>
                            <Input fontWeight={"semibold"}  placeholder='enter caerd holder name'  />
                        </FormControl>

                        <FormControl mt={10}>
                            <FormLabel>Card Number</FormLabel>
                            <HStack px={2} h={"2.5rem"} border='1px' borderColor='gray.200'>
                                <Icon ml={0} h={9} w={9} as={RiVisaLine}/>
                                <PinInput size='s'>
                                    <PinInputField fontWeight={"semibold"}/>
                                    <PinInputField fontWeight={"semibold"}/>
                                    <PinInputField  fontWeight={"semibold"}/>
                                    <PinInputField fontWeight={"semibold"} />

                                    <Text>-</Text>

                                    <PinInputField border={"none"} fontWeight={"semibold"} />
                                    <PinInputField fontWeight={"semibold"} />
                                    <PinInputField fontWeight={"semibold"} />
                                    <PinInputField fontWeight={"semibold"} />

                                    <Text>-</Text>

                                    <PinInputField fontWeight={"semibold"} />
                                    <PinInputField fontWeight={"semibold"} />
                                    <PinInputField fontWeight={"semibold"} />
                                    <PinInputField fontWeight={"semibold"} />

                                    <Text>-</Text>
                                    <PinInputField fontWeight={"semibold"} />
                                    <PinInputField fontWeight={"semibold"} />
                                    <PinInputField  fontWeight={"semibold"}/>
                                    <PinInputField fontWeight={"semibold"} />
                                </PinInput>
                            </HStack>

                        </FormControl>

                        <HStack mt={10}>
                            <FormLabel minW={"20%"}>Expiry Date</FormLabel>
                            <Input max fontWeight={"semibold"} w={"100px"}  placeholder='MM'/>
                            <Text>/</Text>
                            <Input max fontWeight={"semibold"} w={"100px"}  placeholder='YY'/>

                        </HStack>

                        <HStack mt={10}>
                            <FormLabel minW={"20%"}>CCV number</FormLabel>
                            <Input fontWeight={"semibold"} w={"100px"}  placeholder='3 digits'/>
                        </HStack>


                    </ModalBody>

                    <ModalFooter>


                        <Button


                            _hover={{backgroundColor:"g.2"}} h={10} w={"90%"} px={10} color={"white"} bg={"g.2"} mx={"auto"}>
                            Pay ${total} now
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Payment;