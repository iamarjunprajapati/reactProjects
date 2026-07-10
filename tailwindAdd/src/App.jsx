import { useState } from 'react';
import './App.css'
function App() {
  let [bgColor, setBgColor] = useState("olive");

  return (
    <div id='wrapper' className={`w-full h-screen bg-${bgColor}-700 flex justify-center items-end`}>
      <div className='flex justify-center items-center pb-7 gap-4'>
        <button className='bg-red-700 p-2 px-3 rounded-lg text-white' onClick={()=>{setBgColor("red")}}>red</button>
        <button className='bg-orange-700 p-2 px-3 rounded-lg text-white' onClick={()=>{setBgColor("orange")}}>orange</button>
        <button className='bg-green-700 p-2 px-3 rounded-lg text-white' onClick={()=>{setBgColor("green")}}>green</button>
        
      </div>
    </div>
  )

}

export default App;
