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
    Link, Center, Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {useRouter} from "next/router";
import axios from "axios";
import {getCookie, setCookies} from "cookies-next";
export default function SignupCard() {
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");
    const[isValid,setIsValid] = useState(password===""||email==="")
    const[isSubmitting,setIsSubmitting] = useState(false)

    useEffect(()=>{
        if (password==="" ||email==="")
            setIsValid(true)
        else setIsValid(false )
    },[email,password])

    function handleEmailChange  (e) {
        setEmail(e.target.value);
    }


    function handlePasswordChange  (e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        setIsSubmitting(true);
        setIsValid(true);
        setError("");
        axios({
            method: 'post',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/provider/signin',
            data: {
                password: password,
                email: email
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }

        }).then(function (response) {
            console.log(response.data)
            setCookies('provider', JSON.stringify(response.data));
            let provider = JSON.parse(getCookie('provider'));
            console.log(provider.user_id);
            router.push("/provider/dashboard")

        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                setError(error.response.data.status);
                setIsSubmitting(false)
                setIsValid(false);
            }
        })
    }



    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}>

            <Stack spacing={8} mx={'auto'}  py={12} px={6}>
                <Stack align={'center'}>
                    <Text color={"g.1"} fontSize={'5xl'} textAlign={'center'}>
                        Sign in
                    </Text>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool Activities ✌️
                    </Text>
                </Stack>
                {error!=="" && <Alert status='error'>
                    <AlertIcon/>
                    <AlertTitle mr={2}>Sign-in failed !</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>}
                <Box
                    minW={"30vw"}
                    rounded={'lg'}

                    p={8}>
                    <Stack spacing={4}>

                        <Box>
                            <FormControl id="username" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="text" onChange={handleEmailChange} />
                            </FormControl>
                        </Box>

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
                                isLoading={isSubmitting}
                                disabled={isValid}
                                onClick={handleSubmit}
                                w={205}
mx={"auto"}
                                rounded={"3xl"}
                                size="lg"
                                bg={'g.2'}
                                color={'white'}
                                _hover={{
                                    bg: 'g.2',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text color={"g.1"}  align={'center'}>
                                forget password? <Link href={"/forget"} color={'g.2'}>click here</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>

            </Stack>
            <HStack>
                <Box roundedLeft={"lg"} h={"100vh"} bg={"g.1"} w={"30vw"}>

                    <Center flexDir={"column"} >
                        <Text color={"g.2"} pt={"50%"} fontSize={"6xl"} fontFamily={"Yeseva One"}>Adventurous</Text>
                        <Text  color={"white"} fontSize={"2xl"}> for providers</Text>
                    </Center>

                </Box>
            </HStack>

        </Flex>
    );
}