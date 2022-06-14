  import React, { useState } from 'react'

const Project1 = () => {
const [item ,setItem] = useState('')
const [data ,setData] = useState([])

const itemE =(e)=>{
  return(
    setItem(e.target.value)
  )
}

const Add_item =()=>{
  setData((allItms)=>{
  return[...allItms,item]
})
setItem('');
}

const Remove_item=()=>{
 console.log('delete')
 setData((allItms)=>{
  return allItms.filter((arrElmn)=>{
    
  })
})
}

  return (
    <>
      <div className='inner'>
        <h1>ToDo App</h1>
        <div>
          <input type={"text"} value={item} placeholder={"Enter ToDo Item"} onChange={itemE} />
          <button className='btn btn-success' onClick={Add_item} >Add Item</button>
          <button className='btn btn-success' onClick={Remove_item} >Remove Item</button>
        </div>

        <ol>
          {
            data.map((curElmn,index)=>{
              return(
                
                <li>{curElmn}</li>
              )
            })
          }
        </ol>
      </div>
    </>
  )
}

export default Project1