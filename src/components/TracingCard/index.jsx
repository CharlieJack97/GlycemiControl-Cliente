import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Spacer,
  Divider,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'
 
// We are deconstructing props object directly in the parentheses of the function
export default function TracingCard ( { title, description, _id } ) {
  
  return (
    <Box py={12}>
      <Link to={`/tracing/${_id}`}>
        <Box
          p={'20px'}
          role={'group'}
          maxW={'330px'}
          w={'330'}
          maxH={'300'}
          h={'300'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          overflow={'hidden'}>
        

          <Stack  pt={5} align={'center'}>
            <Heading color={'#ff423d'}  fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              blood glucose:    mmol/l
            </Heading>
            <Divider />
            <Text fontSize={'sm'} textTransform={'uppercase'}>
              {title}
            </Text>
            <Spacer/>
              <Text color={'gray.500'}>
                {description}
              </Text>
            <Stack p={5} direction={'row'} align={'center'}>
              <Text>
                Feb 08, 2021 · 6min read
              </Text>
              <EditIcon/>
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Box>
  );
}
