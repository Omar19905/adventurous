import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link, Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
export default function SignupCard() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    function handleUserNameChange  (e) {
        setUserName(e.target.value);
        console.log(userName)
    }

    function handlePasswordChange  (e) {
        setPassword(e.target.value);
        console.log(userName)
    }
    function handleEmailChange  (e) {
        setEmail(e.target.value);
        console.log(userName)
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}>
            <HStack>
                <Box roundedRight={"lg"} h={"100vh"} bgGradient={"linear(225deg, #cc2b5e 0%, #753a88 100%)"} w={"30vw"}>

                    <Center flexDir={"column"} >
                        <Text color={"white"} pt={"50%"} fontSize={"6xl"} fontFamily={"Yeseva One"}>Adventurous</Text>
                        <Text mt={5} color={"white"} fontSize={"2xl"}>want to grow up your business ?</Text>
                        <Button _hover={{textDecoration: "none"}} as={Link} href={"/provider/sign_up"} mt={2} size={"lg"} rounded={"3xl"} color={"white"} bg={"transparent"} border={"4px white solid"}>
                            Sign for Providers
                        </Button>
                    </Center>

                </Box>
            </HStack>
            <Stack spacing={8} mx={'auto'}  py={12} px={6}>
                <Stack align={'center'}>
                    <Text  fontSize={'5xl'} textAlign={'center'}>
                        Sign up
                    </Text>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool Activities ✌️
                    </Text>
                </Stack>
                <Box
                    minW={"30vw"}
                    rounded={'lg'}
                    bg={'white'}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                            <Box>
                                <FormControl id="username" isRequired>
                                    <FormLabel>User Name</FormLabel>
                                    <Input type="text" onChange={handleUserNameChange} />
                                </FormControl>
                            </Box>

                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input onChange={handleEmailChange} type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input onChange={handlePasswordChange} type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        } >
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                rounded={"3xl"}
                                size="lg"
                                bg={'#cc2b5e'}
                                color={'white'}
                                _hover={{
                                    bg: '#a61e47',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text  align={'center'}>
                                Already a user? <Link href={"/sign_in"} color={'#cc2b5e'}>sign in</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>

            </Stack>

        </Flex>
    );
}