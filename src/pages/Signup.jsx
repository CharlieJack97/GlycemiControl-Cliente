import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import * as USER_HELPERS from "../utils/userToken";
import {
  Box,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
  SimpleGrid,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import ImageBackground from '../images/imageBackground.png'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    email: '',
    password: "",
  });

  const { username, email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      email,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate("/");
    });
  }

  return (
    <Box>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        display="gridColumn"
        columns={{ md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
        ml={100}>
        <Stack
         spacing={{ base: 10, md: 20 }} 
         h='561' w='400' 
         bgRepeat={'no-repeat'} 
         backgroundImage={`url(${ImageBackground})`}/>
        <Stack ml={-50} mr={200}>
          <Stack  spacing={4}>
            <Heading 
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
            Sign Up
            <Text
            as={'span'}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text">!
            </Text>
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('gray.200', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleFormSubmission} className="auth__form">
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={handleInputChange}
                  required
                  unique
                  mb={5}
                />
                <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      required
                      unique
                      placeholder="example@example.com"
                      mb={5}
                    />
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={show ? 'text' : 'password'}
                    name="password"
                    placeholder="********"
                    value={password}
                    onChange={handleInputChange}
                    required
                    mb={5}
                    minLength="8"
                  />
                  {error && (
                  <Stack align={'center'}
                   fontFamily='Arial' 
                   mt={5} 
                   mb={5} 
                   bg="#ff5e5b" 
                   rounded='10px' 
                   pt={3}
                   pb={3}>
                    <Text color={'white'}>There was an error submiting the form:</Text>
                    <Text color={'red'} fontSize={18}>
                      <strong>{error.message}</strong>
                    </Text>
                  </Stack>
                  )}
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? <ViewOffIcon/> : <ViewIcon/> }
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button
                  type="submit"
                  size="lg"
                  bg={'#ff5e5b'}
                  color={'white'}
                  _hover={{
                    bg: '#ff423d',
                  }}
                  mt={5}>
                  Sign up
                </Button>
              </form>
            </Stack> 
          </Box>
        </Stack>
      </Container>        
    </Box>
  );
}
