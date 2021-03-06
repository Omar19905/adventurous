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
import axios from 'axios';
import PasswordStrengthBar from 'react-password-strength-bar';

export default function SignupCard() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [score, setScore]=useState("");


    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const[isValid,setIsValid] = useState(password===""||userName===""||email===""||score<=1)
    const[isSubmitting,setIsSubmitting] = useState(false)

    const [showPassword, setShowPassword] = useState(false);

    useEffect(()=>{
        if (password==="" ||userName===""||email===""||score<=1)
            setIsValid(true)
        else setIsValid(false )
    },[userName,password,email,score])

    function handleUserNameChange  (e) {
        setUserName(e.target.value);
    }

    function handlePasswordChange  (e) {
        setPassword(e.target.value);
    }
    function handleEmailChange  (e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        setIsSubmitting(true);
        setIsValid(true);
        setError("");
        axios({
            method: 'put',
            url: 'https://vast-garden-51796.herokuapp.com/https://backend-advenerice.herokuapp.com/signup',
            data: {
                username: userName,
                password: password,
                email:email
            },
            headers:{
                "X-Requested-With": "XMLHttpRequest"
            }

        }) .then(function (response) {
            console.log(response);
            setSuccess("User have been created successfully")
            setIsValid(false);
            setIsSubmitting(false);
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                setError(error.response.data.status);
                setIsSubmitting(false)
                setIsValid(false);
            }
        });
    }



    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}>

            <HStack>
                <Box roundedRight={"lg"} h={"100vh"} bg={"g.1"} w={"30vw"}>

                    <Center flexDir={"column"} >
                        <Text color={"g.2"} pt={"50%"} fontSize={"6xl"} fontFamily={"Yeseva One"}>Adventurous</Text>
                        <Text mt={5} color={"g.2"} fontSize={"2xl"}>want to grow up your business ?</Text>
                        <Button _hover={{textDecoration: "none"}} as={Link} href={"/provider/sign_up"} mt={2} size={"lg"} rounded={"3xl"} color={"white"} bg={"transparent"} border={"4px white solid"}>
                            Sign up for Providers
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
                        to enjoy all of our cool Activities ??????
                    </Text>
                </Stack>
                <Box
                    minW={"30vw"}
                    rounded={'lg'}
                    bg={'white'}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>

                        {error!=="" && <Alert status='error'>
                            <AlertIcon/>
                            <AlertTitle mr={2}>Sign-up failed !</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>}

                        {success!=="" && <Alert status='success'>
                            <AlertIcon/>
                            <AlertTitle mr={2}>Sign-in success !</AlertTitle>
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>}
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
                            <InputGroup mb={8}>
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
                            <PasswordStrengthBar onChangeScore={(score => setScore(score))} password={password} />

                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                isLoading={isSubmitting}
                                disabled={isValid}
                                onClick={handleSubmit}
                                rounded={"3xl"}
                                size="lg"
                                bg={'g.2'}
                                color={'white'}
                                _hover={{
                                    bg: 'g.2',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text  align={'center'}>
                                Already a user? <Link href={"/sign_in"} color={'g.2'}>sign in</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>

            </Stack>

        </Flex>
    );
}