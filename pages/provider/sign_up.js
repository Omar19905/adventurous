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
    const [companyName, setCompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    function handleCompanyNameChange  (e) {
        setCompanyName(e.target.value);
    }

    function handlePasswordChange  (e) {
        setPassword(e.target.value);
    }
    function handleEmailChange  (e) {
        setEmail(e.target.value);
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}>
            <HStack>
                <Box roundedRight={"lg"} h={"100vh"} bgGradient={"linear(-225deg, #753a88 0%,  #cc2b5e 100%)"} w={"30vw"}>

                    <Center flexDir={"column"} >
                        <Text color={"white"} pt={"50%"} fontSize={"6xl"} fontFamily={"Yeseva One"}>Adventurous</Text>
                        <Text  color={"white"} fontSize={"2xl"}>for providers</Text>
                    </Center>

                </Box>
            </HStack>
            <Stack spacing={8} mx={'auto'}  py={12} px={6}>
                <Stack align={'center'}>
                    <Text  fontSize={'5xl'} textAlign={'center'}>
                        Sign up
                    </Text>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to manage all of your cool features 💼️️
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
                            <FormControl id="companyname" isRequired>
                                <FormLabel>Company name</FormLabel>
                                <Input type="text" onChange={handleCompanyNameChange} />
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
                                bg={'#753a88'}
                                color={'white'}
                                _hover={{
                                    bg: '#662f78',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text  align={'center'}>
                                Already a provider? <Link href={"/provider/sign_in"} color={'#753a88'}>sign in</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>

            </Stack>

        </Flex>
    );
}