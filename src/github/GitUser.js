import React from 'react';

const GitUser = ({user}) => {
    return <>

 <div className="App">
      <h1 className='container'>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          
          <td>Id</td>
          <td>User id</td>
          <td>title</td>
          <td>body</td>
        </tr>
        {
          user.map((curElmn,i)=>
            <tr key={i}>
            <td>{curElmn.id}</td>
            <td>{curElmn.userId}</td>
          <td>{curElmn.title}</td>
            <td>{curElmn.body}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
    </>
};

export default GitUser;
