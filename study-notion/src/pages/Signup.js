import React from 'react'
import Template from '../components/Template';
import singupImg from "../assets/signup.png";

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1= "Build skills for today , tomorrow and beyond."
      desc2= "Education to future-proof your career."
      image= {singupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup;