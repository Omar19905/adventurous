import React from 'react';
import TicketCard from "./TicketCard";
import RatingCard from "./RatingCard";
import {VStack} from "@chakra-ui/react";

const TicketsList = ({tickets}) => {
        const ticketsList= tickets.map((ticket,index) => (
            <div key={index}><TicketCard  ticket={ticket}/></div>
        ))
    return (
        <VStack my={7} spacing={10} alignItems={"left"} >
            {ticketsList}
        </VStack>
    );
};

export default TicketsList;