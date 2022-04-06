import React from 'react';
import {
    Button,
    Icon, Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import {HiOutlineTicket} from "react-icons/hi";
import Barcode from "react-barcode"
const TicketInfo = ({ticket}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button _hover={{backgroundColor:"g.2"}} rounded={"3xl"} onClick={onOpen} bg={"g.2"}  color={"white"} width={"25%"}>
                <Icon w={5} h={5} as={HiOutlineTicket}  />
                view ticket
            </Button>

            <Modal isCentered size={"md"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color={"g.2"}>{ticket.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={ticket.picture}/>
                    </ModalBody>

                    <ModalFooter>
                        <Barcode value={ticket._id.$oid}/>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    );
};

export default TicketInfo;