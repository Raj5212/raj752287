import React from 'react';

const GitUser = ({user}) => {
    return <>

 <div className="App">
      <h1 className='container'>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          
          <td>Id</td>
          <td>Name</td>
          <td>Currency</td>
          <td>Region</td>
  
        </tr>
        {
          user.map((curElmn,i)=>
            <tr key={i}>
            <td>{curElmn.Id}</td>
            <td>{curElmn.Name}</td>
          <td>{curElmn.Currency}</td>
            <td>{curElmn.Region}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
    </>
};

export default GitUser;
