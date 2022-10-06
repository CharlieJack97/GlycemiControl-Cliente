import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Text, Divider, Heading, Stack } from "@chakra-ui/react";

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

  useEffect(()=>getTracing(), [] );
 
  
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
            <Heading>
              Tracking Details
            </Heading>

            <Divider />

      {tracing && (
        <>
          <Heading as='h4' size='md' p={'20px'}>{tracing.title}</Heading>
          <Heading as='h5' size='sm' p={'20px'}>{tracing.description}</Heading>
        </>
      )}

            <Divider />
 
      <Stack display={''} p={5} ml={20}>
        <Link to="/tracing">
          <Button>Back to tracing</Button>
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
 
