import React, { useState } from 'react'
import './index.css'

const App = () => {

  //this part is set the initaial statevalue for time by using useState

  var oldampm=new Date().getHours() > 12 ? "PM":"AM";
  const[hours,setHours]=useState(new Date().getHours());
  const[minutes,setMinutes]=useState(new Date().getMinutes());
  const[seconds,setSeconds]=useState(new Date().getSeconds());
  const[ampm,setAmPm]=useState(oldampm)

  //first get the update time and stored in variable 

  const updatetime=()=>{
    //get AM or PM
    var newampm=new Date().getHours() >= 12 ? "PM":"AM";

    //getupdate hours 
    var newhour=new Date().getHours() % 12 ;
    newhour=newhour < 10 ? "0"+newhour : newhour;

    //getupdate minutes
    var newminutes=new Date().getMinutes();
    newminutes=newminutes < 10 ? "0"+newminutes : newminutes;

    //getupdate seconds
    var newseconds=new Date().getSeconds();
    newseconds=newseconds < 10 ? "0"+newseconds : newseconds;

    //push the variable in setState

    setHours(newhour);
    setMinutes(newminutes);
    setSeconds(newseconds);
    setAmPm(newampm);
  }

  setInterval(updatetime,1000);

  


  
  return (
    <div className='container'>
      <h1 className='heading'>Digital Clock</h1>
      <div className="clockcontainer">
      <div className="clock">
              <p className="hour">{hours}</p>
              <p className="dot">:</p>
              <p className="minute">{minutes}</p>
              <p className="dot">:</p>
              <p className="seconds">{seconds}</p>
              <span>{ampm}</span>
      </div>
      </div>
      
    </div>
  )
}

export default App