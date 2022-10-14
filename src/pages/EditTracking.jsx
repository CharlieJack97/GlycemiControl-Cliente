import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
   Button, 
   Box, 
   FormControl, 
   FormLabel, 
   Input, 
   Textarea, 
   Stack, 
   Highlight, 
   Heading, 
   useColorModeValue 
  } from "@chakra-ui/react";
 
const API_URL = "http://localhost:5005";
 
export default function EditTracking(props) {
  const [glycemic, setGlycemic] = useState("");
  const [symptom, setSymptom] = useState("");
  const [cause, setCause] = useState("");
  const { id } = useParams();
  const navigate = useNavigate(); 


  useEffect(() => {
    axios
      .get(`${API_URL}/api/tracing/${id}`)
      .then((response) => {
        const oneTracing = response.data;
        setGlycemic(oneTracing.glycemic);
        setSymptom(oneTracing.symptom);
        setCause(oneTracing.cause);
      })
      .catch(error => console.log(error));
    
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { glycemic, symptom, cause };
 
    axios
      .put(`${API_URL}/api/tracing/${id}`, requestBody)
      .then((x) => {
        navigate(`/tracing/${id}`)
      });
  };

  const deleteTracking = () => { 
    axios
      .delete(`${API_URL}/api/tracing/${id}`)
      .then(() => {
        navigate("/tracing");
      })
      .catch(err => console.log(err));
  }; 

  
  return (
    <Box>
      <Heading textAlign={'center'}>
        <Highlight
          query='Edit'
          styles={{
             px: '2', 
             py: '1', 
             rounded: 'full', 
             bg:useColorModeValue('#ff8280', '#ff5e5b') 
             }}
        >
          Edit
        </Highlight>
      </Heading>
      <Box display={'center'} justifyContent={'center'}>
        <form onSubmit={handleFormSubmit}>
        <FormControl w={300}>
          <FormLabel mt={5} textAlign={'center'}>Glycemic:</FormLabel>
          <Input
            type="text"
            name="glycemic"
            value={glycemic}
            onChange={(e) => setGlycemic(e.target.value)}

          />
          <FormLabel mt={5} textAlign={'center'}>Symptom:</FormLabel>
          <Textarea
            name="symptom"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}

          />
          <FormLabel mt={5} textAlign={'center'}>Other Symptom:</FormLabel>
          <Textarea
            name="cause"
            value={cause}
            onChange={(e) => setCause(e.target.value)}

          />
          <Stack mb={10} align={'center'}>
            <Button mt={5}><Link to={`/tracing/${id}`}>Back to Details</Link></Button>
            <Button type="submit" value="Submit" >Update</Button>
            <Button colorScheme={'red'}  onClick={deleteTracking}>Delete Tracking</Button>
          </Stack>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}