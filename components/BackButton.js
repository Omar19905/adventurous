import React from 'react';
import {Button, Icon} from "@chakra-ui/react";
import {FiChevronsLeft} from "react-icons/fi";
import {useRouter} from 'next/router'

const BackButton = () => {
    const router = useRouter()

    return (
        <Button color={"#753a88"} m={3} onClick={() => router.push('/provider/dashboard', undefined, {shallow: true})}
                bg={"gray.100"} rounded={"full"}>
            <Icon as={FiChevronsLeft} w={6} h={6} color={"#753a88"}/>
            Back
        </Button>
    );
};

export default BackButton;