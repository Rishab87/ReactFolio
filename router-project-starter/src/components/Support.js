import React from 'react'
import { useNavigate } from 'react-router-dom'
//we can use navigate hook to navigate between pages(components) , we can use it with buttons so that we can navigate by clicking on button , find more use cases if any.....?
//The NavLink component extends the functionality of Link and adds styling capabilities for navigation.
//It allows you to add styles to the link based on whether the current route matches the link's to prop.
//It has an activeClassName prop that specifies the CSS class to apply when the link is active.

//navigate is useful when you need to navigate based on some logic or user interaction within your component. It allows you to navigate without relying on a traditional anchor (<a>) or Link component.
//manlo koi function call ho rha hai button click hone pr tab agar function bhi perform krana hai aur navigate bhi toh use kr skte hai navigate ko...

export const Support = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate("/labs");
    }

    function backHandler(){
        navigate(-1); //isse supports page se pehle jis pg pe the udhr navigate kr jayega
    }

    //React.StrictMode intentionally double-invokes certain functions, including render methods and effects, to help detect side-effects. This is a development-only feature, and it doesn't affect the production build.

//The purpose of this double-invocation is to identify and log side-effects, which might indicate issues like unexpected mutations or inconsistent behavior. It helps developers catch potential problems early in the development process.
//always store sensitive information like API keys .env file common sense wali baat hai kyunki yeh code .js files main jo hai woh toh koi inspect krke bhi pd skta hai aur humari API key le skta hai.


  return (
    <div>
        Support
        <button onClick={clickHandler}>Go to Labs Page</button>
        <button onClick={backHandler}>Go back</button>
    </div>
  )
}
