import React from 'react'
import './App.css';
import amazon from "../public/amazon.jpeg";
import {Bookmark} from 'lucide-react'

function App() {
  return (
    <div className='parent'>
        <div className='card'>
            <div className='top'>
                <img src={amazon} alt=""/>
                <button>save <Bookmark size={12} /></button>
            </div>
            <div className="center">
                <h3>Amazon<span> 5 days ago</span></h3>
                <h2>senior UI/UX Designer</h2>
                <div>
                    <h4>part time</h4>
                    <h4> senior level</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai,India</p>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>

            </div>

        </div>
    
    
    
    </div>
  )
}

export default App