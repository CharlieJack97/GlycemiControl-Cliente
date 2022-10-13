import { useState, useEffect } from "react";
import axios from "axios";
import AddTracking from "../components/AddTracking";
import TracingCard from "../components/TracingCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";
//import SearchComponent from "../components/SearchComponent";


const API_URL = "http://localhost:5005";


export default function TracingList() {
  const [tracing, setTracing] = useState([]);

  const getAllTracing = () => {
    axios
      .get(`${API_URL}/api/tracing`)
      .then((response) => setTracing(response.data))
      .catch(error => console.log(error));
  };


  useEffect(() => getAllTracing(), [] );

  
  return (
    <div>
      {/*<SearchComponent/>*/}
      <AddTracking refreshTracing={getAllTracing}/>
      <Heading textAlign={'center'}>Tracking List</Heading>
      <SimpleGrid columns={3} margin={'20px'}>
        {tracing.map(tracing => {
          return (
              <TracingCard key={tracing._id} {...tracing}/>
          );
        })}     
      </SimpleGrid> 
    </div>
  );
}


