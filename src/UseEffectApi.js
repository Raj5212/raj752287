import React, { useEffect, useState } from 'react';
import Loading from './github/Loading';
import GitUsers from './github/GitUsers';

const UseEffectApi = () => {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getusers = async () => {

    try {
      const response = await fetch('https://api.github.com/users')
      setLoading(false);
      setUsers(await response.json());

    } catch (error) {
      setLoading(false);
      console.log("my error is" + error)

    }

  }

  useEffect(() => {
    getusers();
  }, []);

  if (loading) {
    return <Loading />
  }
  return (

    <>

      <GitUsers users={users} />
    </>
  )
}

export default UseEffectApi;
