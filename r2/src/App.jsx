import React from 'react';
import { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

import Card from './component/Card.jsx';
import './App.css'

function App() {
  
  
  const data = [
    {name: 'xyz', age: '123', isfriendly: true},
    {name: 'abc', age: '456', isfriendly: false},
    {name: 'pqr', age: '789', isfriendly: true},
    {name: 'stu', age: '101', isfriendly: false}
  ]
  const [realData, setRealData] = useState(data);
  
  const handleClike = (index) =>{
    setRealData((prev) => {
      return prev.map((item, itemIndex) => {
        if(index === itemIndex){
          console.log(item)
          return {...item, isfriendly: !item.isfriendly}
        }
        return item;
      })
    
      })
  }

  return (
          
    <div className='w-full  h-screen flex flex-wrap' >
   {  
       realData.map((obj, index) =>
         <Card data={obj} key={index} index={index} handleClick={handleClike}/>
    )}

    </div>
  )
}

export default App
