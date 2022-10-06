import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Form } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
 
const API_URL = "http://localhost:5005";
 
export default function EditTracking(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate(); 


  useEffect(() => {
    axios
      .get(`${API_URL}/api/tracing/${id}`)
      .then((response) => {
        const oneTracing = response.data;
        setTitle(oneTracing.title);
        setDescription(oneTracing.description);
      })
      .catch(error => console.log(error));
    
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description };
 
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
    <div className="EditTracking">
      <h3>Edit</h3>
 
      <Form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <Input type="submit" value="Submit" />

        <Button onClick={deleteTracking}>Delete Tracking</Button>
      </Form>
    </div>
  );
}