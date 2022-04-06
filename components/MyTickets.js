import React, {useEffect, useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, useDisclosure, Icon,
} from '@chakra-ui/react'
import {getCookie} from "cookies-next";
import axios from "axios";
import {HiOutlineTicket} from "react-icons/hi";
import TicketsList from "./home/TicketsList";
const MyTickets = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading,setIsloading]=useState(true)
    const [tickets,setTickets]=useState([])

    useEffect(()=>{
        getActivities()
    },[])
    function getActivities() {
        let participant_cookies = JSON.parse(getCookie("user"))
        let participant_id = participant_cookies._id.$oid
        console.log(participant_id)
        axios({
            method: 'get',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/join_activity',
            params: {
                participant_id: participant_id,
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            }

        }).then(function (response) {
            setTickets(response.data)
            setIsloading(false)
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
            <Button onClick={onOpen} mt={2} color={"g.1"} width={"100%"}>
                <Icon w={5} h={5} mr={6} as={HiOutlineTicket}  />
                 My tickets
            </Button>

            <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color={"g.2"}>My Tickets</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TicketsList tickets={tickets}/>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
};

export default MyTickets;