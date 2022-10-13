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
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  InputRightAddon,
  InputGroup,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const API_URL = "http://localhost:5005";
 
export default function AddTracking(props) {
  const [glycemic, setGlycemic] = useState(0);
  const [glycemicMgxDl, setGlycemicMgxDl] = useState(0);
  const [symptom, setSymptom] = useState("");
  const [cause, setCause] = useState("");
  const [weight, setWeight] = useState(0);
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const requestBody = { glycemic, symptom, cause };
    axios
      .post(`${API_URL}/api/tracing`, requestBody)
      .then(() => {
        // Reset the state
        setGlycemic('');
        setGlycemicMgxDl('');
        setCause("");
        setSymptom("");

        props.refreshTracing();
      })
      .catch(error => console.log(error));
  };
  const handleOnchangeGlycemic =(e)=>{
    setGlycemic(e)
  }

  const handleOnchangeGlycemicMgxDl =(e)=>{
    setGlycemicMgxDl(e)
  }

  const handleOnchangeWeight =(e)=>{
    setWeight(e);
  }


  const calc = (value) => {
    let i = 0;
    if (value >= 12 && value <= 20) {
      i = 0.1;
    } else if (value >= 21) {
      i = 0.2;
    }
    return (i * weight).toFixed(1);
  };

  const conversionFactor = (value) => {
    let i = 18.02;
    if (value >= 40 && value <= 500) {
      return (glycemicMgxDl / i).toFixed(1);
    } 
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
            <Stack bg={useColorModeValue('gray.300', 'gray.900')} p={5} mb={5} rounded={15}>
                  <Heading fontSize={'20px'} textAlign={'center'} mb={5}>Conversion Factor</Heading>
                    <Flex>
                      <InputGroup>
                        <NumberInput
                         step={1}
                         min={40} 
                         max={500}
                         type='Number'
                         name='glycemic'
                         value={glycemicMgxDl}
                         onChange={e=>handleOnchangeGlycemicMgxDl(e)}
                         w={'40%'}
                         >
                        <NumberInputField borderRightRadius={0}/>
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <InputRightAddon children={'mg/dl'}/>
                      </InputGroup>
                      <Text
                       fontSize={'20px'} 
                       ml={-20} 
                       w={'60%'} 
                       textAlign={'end'}>
                        <strong>
                          {conversionFactor(glycemicMgxDl)} mmol/l
                        </strong>
                      </Text>
                    </Flex>
                </Stack>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex flexDirection={'row'}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Glycemic:</FormLabel>
                  <InputGroup>
                    <NumberInput
                     step={0.1}
                     min={2} 
                     max={30}
                     type='Number'
                     name='glycemic'
                     value={glycemic}
                     isRequired
                     onChange={e=>handleOnchangeGlycemic(e)}
                     >
                      <NumberInputField borderRightRadius={0} />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <InputRightAddon children={'mmol/l'}/>
                  </InputGroup>     
                  <FormLabel>Symptom:</FormLabel>
                  <Textarea
                    type="text"
                    name="symptom"
                    value={symptom}
                    isRequired
                    onChange={(e) => setSymptom(e.target.value)}
                  />
                <FormLabel>Possible causes of imbalance:</FormLabel>
                  <Textarea
                    type="text"
                    name="cause"
                    value={cause}
                    isRequired
                    onChange={(e) => setCause(e.target.value)}
                  />
                  <Stack mt={10} w={320}  bg={useColorModeValue('#ff8280', '#ff5e5b')} p={5} rounded='15px'>
                    <Heading
                     textAlign={'center'} 
                     color='red' 
                     fontSize={'20px'}>
                      <u>Watch Out!</u>
                    </Heading>
                    <Text
                     bgColor={'red'} 
                     textAlign='center' 
                     rounded={'10px'} 
                     p={1}>
                      <strong>
                        Only administer if blood glucose
                        <br/>
                        greater than or equal to
                        <br/>
                        12 mmol/l
                      </strong>
                    </Text>
                  <InputGroup>
                    <FormLabel>Weight:</FormLabel>
                      <NumberInput
                       w={'30%'}
                       step={1}
                       min={20} 
                       max={300}
                       defaultValue={4}
                       type='Number'
                       name='weight'
                       value={weight}
                       onChange={e=>handleOnchangeWeight(e)}
                       >
                        <NumberInputField borderRightRadius={0} />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <InputRightAddon children={'mmol/l'} mr={5}/>
                    </InputGroup>
                    <Text textAlign={'center'} w={'70%'}>
                      Administer 
                      <strong>{calc(glycemic)}</strong> 
                      units
                    </Text>
                </Stack>
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