import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate("/supports");
    }


  return (
    <div>
        About<br/>
        <button onClick={clickHandler}>Go to Support</button>
    </div>
  )
}
