import React, { useEffect } from 'react'

const url = 'https://course-api.com/react-store-products';


const FirstRequest = () => {
    useEffect (()=>{
        console.log('first axios requiest');
    },[])
  return (
    <h2>firstrequest</h2>
  )
}

export default FirstRequest