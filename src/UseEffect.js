import React, { useEffect, useState } from 'react';
import GitUser from './github/GitUser';

const UseEffect = () => {
  const [user, setUsers] = useState([])

  const getuser = async () => {

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      setUsers(await response.json());
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



// html {
//   font-size: 90.5%;
// }

// body {
//   min-height: 100vh;
//   width: 100vw;
//   background-color: #34495e;
/* display: flex;
justify-content: center;
align-items: center;
flex-direction: column; */
//   color: aliceblue;
//   font-family: "Raleway", sans-serif;
// }

// .App {
//   text-align: center;
// }

// .App-link {
//   color: #8be3fb;
// }

/*  {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */

// p {
//   font-size: 4rem;
// }

// h1 {
//   font-size: 7rem;
//   text-transform: capitalize;
// }

// .h1style {
//   min-width: 20rem;
//   width: 60rem;
//   padding: 2rem 2rem;
//   background-color: azure;
//   color: #2980b9;
//   border-radius: 5rem;
//   box-shadow: 0rem 2rem 2rem -1.5rem rgba(0, 0, 0, 0.5);
//   margin-top: 2rem;
//   text-align: center;
// }

// .btn,
// .btnInner {
//   margin: auto;
//   margin-top: 2rem;
//   border: none;
//   outline: none;
//   padding: 1rem 3rem;
//   background-color: #2980b9;
//   color: aliceblue;
//   cursor: pointer;
//   border-radius: 1rem;
//   font-size: 3rem;
// }

// .btnInner {
//   background-color: #d12b54;
//   padding: 0.7rem 1.5rem;
//   font-size: 1.5rem;
//   margin-left: 4rem;
// }

/* .btn:hover {
  background-color: #136ca7;
} */

// form {
//   background: cornflowerblue;
//   padding: 2rem;
//   border-radius: 1rem;
//   outline: none;
//   text-align: left;
// }

// form label {
//   margin-top: 2rem;
//   font-size: 1.5rem;
//   text-align: left;
//   text-transform: capitalize;
// }

// form input {
//   min-width: 20rem;
//   height: 2rem;
//   border-radius: 0.5rem;
//   font-size: 1.2rem;
//   text-align: left;
//   border: none;
//   margin-top: 0.3rem;
//   padding: 0.5rem;
//   outline: none;
// }

// button[type] {
//   border: none;
//   padding: 0.4rem 1rem;
//   text-align: center;
//   margin-top: 1rem;
//   font-family: "Raleway", sans-serif;
//   border-radius: 0.3rem;
//   cursor: pointer;
//   outline: none;
// }

// button[type]:hover {
//   background-color: darkblue;
//   color: aliceblue;
// }

// .showDataStyle {
//   min-width: 20rem;
//   width: 60rem;
//   min-height: 2rem;
//   padding: 1rem;
//   background: rgb(68, 116, 207);
//   color: aliceblue;
//   margin-top: 4rem;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   flex-direction: row;
//   border-radius: 1rem;
//   box-shadow: 0 1rem 1rem -0.8rem rgba(0, 0, 0, 0.5);
// }

// .showDataStyle p {
//   font-size: 1.5rem;
// }

// .showDataStyle p:first-child {
//   font-weight: bold;
// }

/* body {
  background-color: #b3e5fc;
  border-radius: 10px;
  font-family: "Raleway", sans-serif;
}
h2 {
  text-align: center;
  margin: 20px 0;
}
.textLeft {
  text-align: left;
}
.loadingDiv {
  height: 100vh;
  display: grid;
  place-items: center;
}
.card {
  width: 450px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  margin: auto;
}
.image {
  min-width: 155px;
  margin-right: 20px;
}
.stats {
  background: #f2f5f8 !important;
  color: #000 !important;
}
.articles {
  font-size: 10px;
  color: #a1aab9;
}
.number1 {
  font-weight: 500;
}
.followers {
  font-size: 10px;
  color: #a1aab9;
}
.number2 {
  font-weight: 500;
}
.rating {
  font-size: 10px;
  color: #a1aab9;
}
.number3 {
  font-weight: 500;
} */