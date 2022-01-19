import React from "react"
import "./PopUp.css"
import { useState, useEffect } from 'react'


const PopUp = () => {

  const [show, setShow] = useState(false)

  // On componentDidMount set the timer
  useEffect(() => {
    console.log(`useEffect!`);
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(true)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);


  // If show is false the component will return null and stop here
  if (show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <div>
      {alert(`Halo tu alert`)}
    </div>
  )
}


export default PopUp