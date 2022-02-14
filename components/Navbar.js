import React from 'react';
import { Button, HStack, Link, Spacer, Text} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <HStack bgGradient={"linear(225deg, #cc2b5e 0%, #753a88 100%)"} px={"5rem"} position={"absolute"} top={0} w={"100%"} h={"60px"} >
            {/*Logo*/}
            <Text fontFamily={"Yeseva One"} color={"white"} fontSize={"3xl"}>Adventurous</Text>


            <Spacer/>
            {/*Sign Up / Login*/}
            <HStack  >
                <Button   _hover={{textDecoration: "none"}} as={Link} href={"/sign_in"}  rounded={"3xl"} color={"white"} px={"25px"} bg={"transparent"}>Sign in</Button>
                <Button _hover={{textDecoration: "none"}} as={Link} href={"/sign_up"} rounded={"3xl"} px={"25px"} >Sign Up</Button>
            </HStack>
        </HStack>
    );
};

export default Navbar;