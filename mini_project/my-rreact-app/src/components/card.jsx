import React from 'react'
import '../App.css';
// import amazon from "../public/amazon.jpeg";
//import amazon from "/public/amazon.jpeg";
import {Bookmark} from 'lucide-react'

function Card(elem) {
  return (
    <div className='parent'>
        <div className='card'>
            <div>
            
                <div className='top'>
                    <img src={elem.brandLogo} alt=""/>
                    <button>save <Bookmark size={12} /></button>
                </div>
                <div className="center">
                    <h3>{elem.name}<span > 5 days ago</span></h3>
                    <h2>{elem.post}</h2>
                    <div className="button">
                        <h4>{elem.name}</h4>
                        <h4> {elem.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{elem.pay}</h3>
                    <p>{elem.location}</p>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>

            </div>

        </div>
    
    
    
    </div>
  )
}

export default Card