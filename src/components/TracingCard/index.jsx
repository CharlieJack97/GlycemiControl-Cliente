import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Spacer,
  Divider,
  Center,
  Highlight
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'

 
// We are deconstructing props object directly in the parentheses of the function
export default function TracingCard ( { glycemic, symptom, cause, _id, time } ) {

  return (
    <Center py={6}>
      <Link to={`/tracing/${_id}`}>
        <Box
          maxW={'400px'}
          w={'400px'}
          bg={useColorModeValue('gray.100', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Stack>
            <Heading
              color={'#ff423d'} 
              fontSize={'2xl'}
              fontFamily={'arial'}
              fontWeight={500}>
              blood glucose: <strong>{glycemic}</strong> mmol/l
            </Heading>
            <Spacer/>
            <Divider />
            <Spacer/>
            <Heading fontSize={20}>Symptom:</Heading>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              overflow={'hidden'}
              textOverflow='ellipsis'
              w={'350px'}
              whiteSpace='nowrap'>
              {symptom}
            </Text>
            <Spacer/>
            <Divider />
            <Spacer/>
            <Heading fontSize={20}>Causes of imbalance:</Heading>
            <Text 
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              overflow={'hidden'}
              textOverflow='ellipsis'
              w={'350px'}
              whiteSpace='nowrap'
              >
              {cause}
            </Text>
            <Spacer/>
            <Divider />
            <Spacer/>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontSize={'16 px'} color={'gray.500'}>{`${new Date(time).toLocaleString()}`}</Text>
            </Stack>
          </Stack>
          <EditIcon/>
        </Box>
      </Link>
    </Center>
  );
}