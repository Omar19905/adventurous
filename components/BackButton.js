import React from 'react';
import {Button, Icon} from "@chakra-ui/react";
import {FiChevronsLeft} from "react-icons/fi";
import {useRouter} from 'next/router'

const BackButton = () => {
    const router = useRouter()

    return (
        <Button color={"g.1"} m={1} onClick={() => router.push('/provider/dashboard', undefined, {shallow: true})}
                bg={"transparent"} rounded={"full"}>
            <Icon as={FiChevronsLeft} w={6} h={6} color={"g.2"}/>
            Back
        </Button>
    );
};

export default BackButton;