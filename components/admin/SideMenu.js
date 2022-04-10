import React from 'react';
import {
    Avatar, Box, Button, Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Flex, Icon, Text,
    VStack
} from "@chakra-ui/react";
import MyTickets from "../MyTickets";
import {FaRegBell} from "react-icons/fa";
import AccountSettings from "../AccountSettings";
import {FiLogOut} from "react-icons/fi";
import {BiCategory} from "react-icons/bi";
import {useRouter} from "next/router";

const SideMenu = () => {
    const router = useRouter()
    return (

        <VStack shadow={"2xl"} bg={"gray.50"} position={"fixed"} h={"100vh"} w={"21%"}>
            <VStack mt={10} justify={"center"} w={"100%"}>
                <Avatar
                    src={"https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"}
                    size={'2xl'}/>
                <Text color={"g.1"} fontWeight={"semibold"} fontSize={"xl"}>Admin</Text>

                <Button onClick={() => router.push("/admin/categories", undefined, {shallow: true})} mt={2}
                        color={"g.1"} width={"100%"}>
                    <Icon w={5} h={5} mr={5} as={BiCategory}/>
                    Categories
                </Button>


            </VStack>
        </VStack>


    );
};

export default SideMenu;