
import React, { useState } from 'react'

const Project1 = () => {
const [list,setList]=useState('');
const [items,setItems]=useState([]);


const item =(e)=>{
setList(e.target.value)
}

const itemList=()=>{
    setItems((allitms)=>{
        return [...allitms,list];
    });

    // console.log(itemList)
     let cada = [list]
    // console.log(cada)

    

    let data = cada.filter((e)=>{
    console.log(e.charAt(0).toUpperCase()+e.slice(1))
     return e.charAt(0).toUpperCase()+e.slice(1)
    })
    setList('');
    console.log(data)
}
// console.log(cada)
  return (
    <>
  <h1>Check by the enter value</h1>
  <input className='inner' type="text" value={list} onChange={item}/>
  <button onClick={itemList}>Add Item  </button>

  <ol>

  {/* {data} */}
  {/* {item.map((item,key)=>{ */}
    {/* return( */}
        {/* <>
<div className='todo_style'>
    <i className='fa fa-items' aria-hidden="true"/>
</div>
    <li>{key}  ::  </li>
    </>
    )
  })} */}
  </ol>
    </>
  )
}

export default Project1