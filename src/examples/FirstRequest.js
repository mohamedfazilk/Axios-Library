import React, { useEffect } from 'react';
import axios from 'axios';

const url = 'https://course-api.com/react-store-products';

const fetchdata = async()=>{
  try{
    const response = await axios(url)
    const data = response.data;
    console.log(data);
  }
  catch(error){
    console.log(error.response);

  }
 
}

const FirstRequest = () => {
    useEffect (()=>{
       fetchdata();
    },[])
  return (
    <h2>firstrequest</h2>
  )
}

export default FirstRequest