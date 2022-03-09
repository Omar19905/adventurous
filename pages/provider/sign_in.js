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

    const [showPassword, setShowPassword] = useState(false);

    function handleCompanyNameChange  (e) {
        setCompanyName(e.target.value);
        console.log(userName)
    }

    function handlePasswordChange  (e) {
        setPassword(e.target.value);
        console.log(userName)
    }



    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}>

            <Stack spacing={8} mx={'auto'}  py={12} px={6}>
                <Stack align={'center'}>
                    <Text color={"#3e4d3a"} fontSize={'5xl'} textAlign={'center'}>
                        Sign in
                    </Text>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool Activities ✌️
                    </Text>
                </Stack>
                <Box
                    minW={"30vw"}
                    rounded={'lg'}

                    p={8}>
                    <Stack spacing={4}>

                        <Box>
                            <FormControl id="username" isRequired>
                                <FormLabel>Company Name</FormLabel>
                                <Input type="text" onChange={handleCompanyNameChange} />
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
                                w={205}
mx={"auto"}
                                rounded={"3xl"}
                                size="lg"
                                bg={'#b2ab37'}
                                color={'white'}
                                _hover={{
                                    bg: '#5b296b',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text color={"#3e4d3a"}  align={'center'}>
                                forget password? <Link href={"/forget"} color={'#b2ab37'}>click here</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>

            </Stack>
            <HStack>
                <Box roundedLeft={"lg"} h={"100vh"} bg={"#3e4d3a"} w={"30vw"}>

                    <Center flexDir={"column"} >
                        <Text color={"#b2ab37"} pt={"50%"} fontSize={"6xl"} fontFamily={"Yeseva One"}>Adventurous</Text>
                        <Text  color={"white"} fontSize={"2xl"}> for providers</Text>
                    </Center>

                </Box>
            </HStack>

        </Flex>
    );
}