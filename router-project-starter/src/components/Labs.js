import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Labs = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate("/about");
    }

  return (
    <div>
        Labs <br/>
        <button onClick={clickHandler}>Move to About Page</button>
    </div>


  )
}
