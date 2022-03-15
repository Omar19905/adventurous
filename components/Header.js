import React from 'react';
import Navbar from "./Navbar";
import {Box, Text} from "@chakra-ui/react";
import Typist from 'react-typist';
import Filters from "./Filters";

const Header = () => {
    return (
        <Navbar>
            <Box textAlign={"center"} color={"white"} fontSize={"6xl"} w='100%' h='21vh' >
                <Typist cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 333,
                }} >
                    Life is an event.
                    <br/>
                    Make it unforgettable
                    <Typist.Backspace count={13} delay={250} />
                    <Text display={"inline"} color={"g.2"}>memorable !</Text>
                </Typist>
            </Box>

            <Filters/>

        </Navbar>
    );
};

export default Header;