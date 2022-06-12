import React, { useEffect, useState } from 'react';
import GitUser from './github/GitUser';

const UseEffect = () => {
  const [user, setUsers] = useState([])

  const getuser = async () => {

    try {
      const response = await fetch("https://restcountries.com/v3.1/name/India?fullText=true")
      setUsers(await response.json());
      const Jdson= response.json()
    } catch (error) {
      }
  }

  useEffect(() => {
    getuser();

  }, []);
  return (
    <>

      <GitUser user={user} />
    </>
  );
};

export default UseEffect;

