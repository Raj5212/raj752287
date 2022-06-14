// import React, {useState, useEffect } from 'react'

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [das, setDas] = useState([]);

//   const Data = async()=>{
//     const res = await fetch('https://reqres.in/api/users');
//     const data = await res.json();
//     console.log(data.data)
//     // let userss = data.data
//     let friends =data.data.filter( function (e) {
//       return   e.email.includes('')
     
//     });
//     setDas(friends) 
//     console.log("dasda",friends)
//     try {
//         setUsers(data.data);
//         // console.log(data)
//     } catch (err) {
//         console.log(err);
//     }


//   }
//   useEffect(()=>{
//     Data();
//   },[]);
//   return (
//     <div style={{ margin: 'auto', width: '50%', marginTop: '10rem' }}>
//     <h3>How to use Map, Filter and Reduce</h3>
//     <div style={{ marginBottom: 16, textAlign: 'right' }}>
//     </div>
//     <div>
//       <table >
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>first_name</th>
//             <th>last_name</th>
//             <th>Email</th>
//             <th>avatar</th>
//             <th>Expense</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.avatar}</td>
//                   <td>{item.expense}</td>
//                 </tr>
//               )
//             })
//           }

         
//         </tbody>
//         <tfoot>
//           {/* <td colSpan={5}>Total</td>
//           <td>{totalExpense}</td> */}
//         </tfoot>
//       </table>
//       <div>
//       {
//         das.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.first_name}</td>
//                   <td>{item.status}</td>
//                   <td>{item.email}</td>
//                   <td>{item.mobile}</td>
//                   <td>{item.expense}</td>
//                 </tr>
//               )
//             })
//           }
//           </div>
//     </div>
//   </div>
// );
// }

// export default App;


import React from 'react'
import Project1 from './Project1'
// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import BasicForm from './BasicForm'

const App = () => {
  return (
    <div>
      <BasicForm/>
    </div>
  )
}

export default App; 