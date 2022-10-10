import { useState } from "react";
import axios from "axios";
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
const API_URL = "http://localhost:5005";
 
export default function AddTracking(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const requestBody = { title, description };
    axios
      .post(`${API_URL}/api/tracing`, requestBody)
      .then(() => {
        // Reset the state
        setTitle("");
        setDescription("");

        props.refreshTracing();
      })
      .catch(error => console.log(error));
  };

  
 
  
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h1 fontSize="3xl" fontWeight="700">
              <u>Glycemic profile record</u>
            </chakra.h1>
            <br/>
            <br/>
            <Box word-wrap={'break-word'} fontSize="1xl" fontWeight="400" pe={'100px'}>
            You can control your diabetes and live a long, healthy life by taking care of yourself every day.<br/>
            Diabetes can affect almost any part of the body. For this, you will need to manage your blood glucose levels, also called blood sugar. Controlling your blood glucose level, as well as your blood pressure and cholesterol, can help prevent health problems that can occur with diabetes.
            </Box>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Title:</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                <FormLabel>Description:</FormLabel>
                  <Textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Button m={'20px'} type="submit" colorScheme="red" size="md">
                    Add Tracking
                  </Button>
                </FormControl>
            </form>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} />
    </Box>

  );
}