import React, { useContext } from 'react'
import Data from './ComA';

const ComC = () => {
  const name = useContext(Data);
  console.log(name)
  return   <h1>  </h1>
    
};

export default ComC

