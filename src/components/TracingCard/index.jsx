import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Spacer,
  Divider,
  Center
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'
 
// We are deconstructing props object directly in the parentheses of the function
export default function TracingCard ( { title, description, _id } ) {
  
  return (
    <Center py={6}>
      <Link to={`/tracing/${_id}`}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Stack>
            <Heading
              color={'#ff423d'} 
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight={500}>
              blood glucose:    mmol/l
            </Heading>
            <Spacer/>
            <Divider />
            <Spacer/>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              {title}
            </Text>
            <Spacer/>
            <Divider />
            <Spacer/>
            <Text color={'gray.500'}>
              {description}
            </Text>
            <Spacer/>
            <Divider />
            <Spacer/>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
            </Stack>
          </Stack>
          <EditIcon/>
        </Box>
      </Link>
    </Center>
  );
}