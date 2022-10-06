import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  

  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue()}
        color={useColorModeValue()}>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <div className="logo"><img src="./logo2.png"/></div>
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 GlycemiControl. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }