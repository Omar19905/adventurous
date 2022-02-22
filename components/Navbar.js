import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Center,
    HStack,
    Link, Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Spacer,
    Text
} from "@chakra-ui/react";
import {checkCookies, getCookie,removeCookies} from 'cookies-next';

const Navbar = () => {
    let [isLogedIn,setIsLogedIn] = useState(checkCookies('user')) ;
    let [user,setUser] = useState("");


    useEffect(()=>{
        if (isLogedIn)
            setUser(JSON.parse(getCookie("user")))
    },[isLogedIn])

    function logout(){
        setUser([]);
        removeCookies("user");
        setIsLogedIn(false)
    }
    return (
        <HStack bgGradient={"linear(225deg, #cc2b5e 0%, #753a88 100%)"} px={"5rem"} position={"absolute"} top={0} w={"100%"} h={"60px"} >
            {/*Logo*/}
            <Text fontFamily={"Yeseva One"} color={"white"} fontSize={"3xl"}>Adventurous</Text>


            <Spacer/>
            {/*Sign Up / Login*/}
            {!isLogedIn && <HStack>
                <Button _hover={{textDecoration: "none"}} as={Link} href={"/sign_in"} rounded={"3xl"} color={"white"}
                        px={"30px"} bg={"transparent"}>Sign in</Button>
                <Button _hover={{textDecoration: "none"}} as={Link} href={"/sign_up"} rounded={"3xl"} px={"40px"}>Sign
                    Up</Button>
            </HStack>}

            {isLogedIn&&
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                        size={'md'}
                    />
                </MenuButton>
                <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                        <Avatar
                            size={'2xl'}
                        />
                    </Center>
                    <br />
                    <Center>
                        <p>{user.user_id}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>My Activities</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <Center><Button mt={5} variant={"outline"} colorScheme={"red"} onClick={logout}>Logout</Button></Center>
                </MenuList>
            </Menu>

            }

        </HStack>
    );
};

export default Navbar;