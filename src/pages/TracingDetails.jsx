import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
   Box, 
   Button, 
   Divider, 
   Text, 
   Heading, 
   Stack, 
   Highlight, 
   useColorModeValue 
  } from "@chakra-ui/react";

const API_URL = "http://localhost:5005"; 
 
 
export default function TracingDetails (props) {
  const [tracing, setTracing] = useState(null);
  const { id } = useParams();

  
  const getTracing = () => {
    axios
      .get(`${API_URL}/api/tracing/${id}`)
      .then(response => {
        const oneTracing = response.data;
        setTracing(oneTracing);
      })
      .catch(error => console.log(error));
  };

  useEffect(()=>getTracing(), []);
 
  
  return (
    <Box>
      <Stack spacing={4} width={'100%'} direction={'column'}>
      <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading mb={5}>
              <Highlight
                query='Tracking Details'
                styles={{ px: '2', py: '1', rounded: 'full', bg:useColorModeValue('#ff8280', '#ff5e5b') }}
              >
              Tracking Details
              </Highlight>
            </Heading>

            <Divider />

      {tracing && (
        <>
          <>
            <Heading as='h3' size='md' p={'5px'}>Glycemic:</Heading>
            <Text>{tracing.glycemic} mmol/l</Text>
          </>
          <>
            <Heading as='h3' size='sm' pt={10}>Symptom:</Heading>
            <Text>{tracing.symptom}</Text>
          </>
          <>
            <Heading as='h3' size='sm' pt={10}>Possible causes of imbalance:</Heading>
            <Text>{tracing.cause}</Text>
          </>
        </>
      )}

            <Divider />
 
      <Stack display={''} p={5} ml={20}>
        <Link to="/tracing">
          <Button mr={10}>Back to tracing</Button>
        </Link>
        <Link to={`/tracing/edit/${id}`}>
          <Button colorScheme={'red'}>Edit</Button>
        </Link>  
      </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
 
