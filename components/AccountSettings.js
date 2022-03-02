import React, {useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Radio, Stack, RadioGroup, useDisclosure, Textarea, Avatar
} from "@chakra-ui/react";



const AccountSettings = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sex, setSex] = useState('')


    return (
        <>
            <Box onClick={onOpen}>Account Settings</Box>


            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Avatar mr={2} size={"sm"}/>
                        Edit your account
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>User name</FormLabel>
                            <Input  placeholder='Ali' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='ali@albakri.com' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Picture</FormLabel>
                            <Input placeholder='https://placeholder.com' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Sex</FormLabel>
                            <RadioGroup onChange={setSex} value={sex}>
                                <Stack direction='row'>
                                    <Radio colorScheme={"blue"} value='Male'>Male</Radio>
                                    <Radio colorScheme={"pink"} value='Female'>Female</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl w={250} id="bio">
                            <FormLabel  fontSize={"xl"}>Bio</FormLabel>
                            <Textarea h={"130px"} size={"md"}/>
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>
                        <Button _hover={{backgroundColor:"transparent"}} h={8} px={10} color={"white"} bgGradient={"linear(225deg, #cc2b5e 0%, #753a88 100%)"} mr={3}>
                            Save
                        </Button>
                        <Button h={8} px={10} variant={"outline"}  onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AccountSettings;