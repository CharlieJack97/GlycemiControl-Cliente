import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AboutControlImg from '../../images/aboutControl.png'

  export default function AboutControl() {
    return (
      <Container maxW={'5xl'} py={12} mt={55} mb={30}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>For what purpose is the control carried out?</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            It allows us to know the glucose level immediately, thus reducing the risk of significant hypoglycemia and hyperglycemia. Knowing glucose levels at different times of the day allows us to be safer and have a "feeling of control" over the disease.
            </Text>
            <Link to='/tracing'>
            <Button
              px={6}
              colorScheme={'red'}>
              Take Control
            </Button>
          </Link>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={AboutControlImg}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }