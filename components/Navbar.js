import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,
    HStack, Icon,
    Link,
    Spacer,
    Text, useDisclosure, VStack
} from "@chakra-ui/react";
import {checkCookies, getCookie,removeCookies} from 'cookies-next';
import AccountSettings from "./AccountSettings";
import {FiActivity, FiClipboard, FiLogOut} from "react-icons/fi";
import {FaRegBell} from "react-icons/fa";

const Navbar = ({children}) => {
    let [isLogedIn,setIsLogedIn] = useState(checkCookies('user')) ;
    let [user,setUser] = useState("");
    const {isOpen, onOpen, onClose} = useDisclosure()


    useEffect(()=>{
        if (isLogedIn)
            setUser(JSON.parse(getCookie("user")))
    },[isLogedIn])

    function logout(){
        setUser([]);
        removeCookies("user");
        setIsLogedIn(false)
    }

    console.log(user)

    return (
        <Flex direction={"column"} py={5} px={"5rem"}   w={"100%"}   bg={"#3e4d3a"}>
            <HStack w={"100%"}>
            {/*Logo*/}
            <Text fontFamily={"Yeseva One"} color={"#b2ab37"} fontSize={"4xl"}>Adventurous</Text>


            <Spacer/>

            {/*Sign Up / Login*/}
            {!isLogedIn && <HStack>
                <Button _hover={{textDecoration: "none"}} as={Link} href={"/sign_in"} rounded={"3xl"} color={"white"}
                        px={"30px"} bg={"transparent"}>Sign in</Button>
                <Button color={"white"} bg={"#b2ab37"} _hover={{textDecoration: "none"}} as={Link} href={"/sign_up"}
                        rounded={"3xl"} px={"40px"}>Sign
                    Up</Button>
            </HStack>}

            {isLogedIn &&

                <>
                <Avatar src={user.profileImage} _hover={{cursor: "pointer"}} onClick={onOpen}
                size={'md'}
                />
                <Drawer

                        isOpen={isOpen}
                placement='left'
                onClose={onClose}
                >
                <DrawerOverlay/>
                <DrawerContent bg={"gray.50"} roundedRight={"xl"}>
                <DrawerCloseButton/>
                <DrawerHeader>Account</DrawerHeader>

                <DrawerBody p={0}>
                <VStack   justify={"center"} w={"100%"} >
                <Avatar src={user.profileImage} size={'2xl'}/>
                <Text color={"g.1"} fontWeight={"semibold"} fontSize={"xl"}>{user.username}</Text>

                    <Button mt={2} color={"g.1"} width={"100%"}>
                        <Icon w={5} h={5} mr={5} as={FiClipboard}  />
                        My Activities
                    </Button>
                    <Button mt={2} color={"g.1"} width={"100%"}>
                        <Icon w={5} h={5} mr={5} as={FaRegBell}  />
                        Notifications
                    </Button>

                    <AccountSettings setUser={setUser} user={user}/>


                </VStack>

                </DrawerBody>

                <DrawerFooter>
                <Button colorScheme={"red"} variant='outline' mr={3} onClick={logout}>
                Logout <Icon  as={FiLogOut}  />
                </Button>
                </DrawerFooter>
                </DrawerContent>
                </Drawer>
                </>

            }

        </HStack>

            {children}

        </Flex>
    );
}

export default Navbar;