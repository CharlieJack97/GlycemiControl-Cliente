import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as USER_HELPERS from "../utils/userToken";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate("/");
    });
  }

return (
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('white', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('gray.50', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl onSubmit={handleFormSubmission} id="username">
            <FormLabel>Username</FormLabel>
              <Input
                id="input-username"
                type="text"
                name="username"
                placeholder="Charlie"
                value={username}
                onChange={handleInputChange}
                required
              />
          </FormControl>
          <FormControl onSubmit={handleFormSubmission} id="password">
            <FormLabel>Password</FormLabel>
              <Input
                id="input-password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                required
                minLength="8"
              />
          </FormControl>
          {error && (
          <Stack className="error-block">
            <Text>There was an error submiting the form:</Text>
            <Text>{error.message}</Text>
          </Stack>
          )}
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column',}}
              align={'start'}
              justify={'space-around'}>
              <Checkbox colorScheme='red' isRequired>Remember me</Checkbox>
            </Stack>
            <Button
              type="submit"
              size="lg"
              bg={'#ff5e5b'}
              color={'white'}
              _hover={{ bg: '#ff423d' }}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  );
}
