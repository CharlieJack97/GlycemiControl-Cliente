import React, { useState } from "react";
import { signup } from "../services/auth";
import { Form, useNavigate } from "react-router-dom";
import * as USER_HELPERS from "../utils/userToken";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputRightAddon,
  HStack,
} from '@chakra-ui/react';


export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    weight: "",
    age: ""
  });

  const { username, password, email, weight, age } = form;
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
      password,
      email,
      weight,
      age
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
      <div>
        <form onSubmit={handleFormSubmission}> 
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('white', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                  Sign up
                </Heading>
              </Stack>
              <Box
                rounded={'lg'}
                bg={useColorModeValue('gray.50', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <Box>
                      <FormControl onSubmit={handleFormSubmission} isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input
                          id="input-username"
                          type="username"
                          name="username"
                          placeholder="Enter your Username"
                          value={username}
                          onChange={handleInputChange}
                          required
                          unique
                        />
                      </FormControl>
                    </Box>
                  <FormControl onSubmit={handleFormSubmission} id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      id="input-email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      required
                      unique
                      placeholder="example@gmail.com"
                    />
                  </FormControl>
                  <FormControl onSubmit={handleFormSubmission} id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='********'
                        id="input-password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                        minLength="8"
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <HStack>
                    <Box>
                    <FormControl>
                      <FormLabel onSubmit={handleFormSubmission} isRequired>Weight</FormLabel>
                      <InputGroup>
                        <Input
                         type={'number'} 
                         name={"weight"}
                         required
                         value={weight}
                         onChange={handleInputChange}
                         placeholder={'0'}
                          />
                        <InputRightAddon children={'Kg'}/>
                      </InputGroup>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl>
                        <FormLabel onSubmit={handleFormSubmission} isRequired>Age</FormLabel>
                        <InputGroup>
                          <Input
                           type={'number'}
                           name={"age"} 
                           required 
                           onChange={handleInputChange}
                           placeholder={'0'}
                           value={age}
                           />
                           
                        </InputGroup>
                      </FormControl>
                    </Box>
            </HStack>
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      size="lg"
                      bg={'#ff5e5b'}
                      color={'white'}
                      _hover={{
                        bg: '#ff423d',
                      }}>
                      Sign up
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </form>
      </div>
    );
    }
