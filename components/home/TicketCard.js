import React from 'react';
import {Avatar, HStack, Spacer, Text} from "@chakra-ui/react";
import TicketInfo from "./TicketInfo";

const TicketCard = ({ticket}) => {
    console.table(ticket)
    return (
        <HStack>
            <Avatar src={ticket.picture}/>
            <Text fontWeight={"semibold"} color={"g.1"} fontSize={"xl"}>{ticket.title}</Text>
             <Spacer/>
            <TicketInfo ticket={ticket}/>
        </HStack>
    );
};

export default TicketCard;