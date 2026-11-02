import React from 'react'
import './App.css';
import Card from "./components/card.jsx";
import jobs from "./components/jobs.jsx";

function App() {
  return (
    <div className='parent1'>
       {jobs.map(function (elem){
        return <Card key = {elem.name} {...elem}/>
      })}
      
        
    </div>
  )
}

export default App