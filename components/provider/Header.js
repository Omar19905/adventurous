import React from 'react';
import {HStack, Spacer, Text} from "@chakra-ui/react";
import Clock from "react-live-clock";

const Header = () => {
    return (
        <HStack fontWeight={"bold"} color={"g.2"} my={7} mx={4}>
            <Text color={"g.2"} fontSize={"2xl"} fontWeight={"bold"}>Welcome, CompanName</Text>
            <Spacer/>
            <Clock
                format={'dddd, MMMM Do , h:mm a'}
                style={{fontSize: '1.5em'}}
                ticking={true}
            />
        </HStack>
    );
};

export default Header;