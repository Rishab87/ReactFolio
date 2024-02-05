import { useState } from "react";
import "./App.css";

function App() {

  // const [firstName,setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function firstNameHandler(event){
  //   setFirstName(event.target.value); //event.target se uss particular element ko darsha rhe hote hai 
  // }

  // function lastNameHandler(event){
  //   setLastName(event.target.value);
  // }
  //HW: create a form ,photo in phone

  function changeHandler(event){
    const {name,value,checked , type} = event.target;
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checked"? checked:value //why we need to use square brackets here?
        //Controlled components , some theory is in nb
      }//In React, a controlled component is a form element whose value is managed by the React state. This means that the component's value is always in sync with the state, and any changes to the value are reflected in the state.

    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing entire form data..................");
    console.log(formData);
    console.log(event.target);
  }

  const [formData , setFormData] = useState( {firstName: "" , lastName: "" , email: "" , comments: "" , isVisible: true , mode: "" , favCar: ""});

  // console.log(formData);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="first name" onChange={changeHandler} name="firstName" value={formData.firstName}></input>  {/*Name ko object ke andar jo key ka name hai vahi name dediya taki uss key ki value change kr paye name ka use krke */}
        <br/>
        <input type="text" placeholder="last name" onChange={changeHandler} name="lastName" value={formData.lastName}></input>
        <br/>
        <input type="email" placeholder="enter your email here" onChange={changeHandler} value={formData.email} name="email"></input>

        <br/>
        <br/>
        <textarea placeholder="Enter your comments" name="comments" value={formData.comments}></textarea>

        <br/>

        <label htmlFor="isVisible"></label> {/*for keyword is reserved for loop in js thats why htmlFor attr. */}
        <input id="isVisible" type="checkbox" onChange={changeHandler} name="isVisible" checked = {formData.isVisible}></input> {/*tick untick krne se by default bina kuch handler main change kre On hi rhega isVisible*/}
        {/*checkbox main value ki jagah checked ka use krenge ki apka checkbox checked hai ya nhi , iss case main website chlate hi checked rhega kyunki isVisible ki value true hai*/}

        <br/>
        <br/>

        <input type="radio" onChange={changeHandler} name="mode" value= "Online-mode" id="mode" checked = {formData.mode === "Online-Mode"}></input>{/*agar formData.mode Online-Mode ke equal hoga tabhi checked true hoga jiska matlab agar iss radio button pe check krunga toh mode Online-Mode hojayega*/}
        <label htmlFor="mode">Online-Mode</label>

        <input type="radio" onChange={changeHandler} name="mode" value= "Offline-mode" id="mode" checked = {formData.mode === "Offline-Mode"}></input>
        <label htmlFor="mode">Offline-Mode</label>

        <select onChange={changeHandler} name="favCar" id="favCar" value={formData.favCar}>

        <option value= "Lamborghini">Lamborghini</option>
        <option value= "Rolls-Royce">Rolls-Royce</option>
        <option value= "Ferrari">Ferrari</option>

        </select>
        {/*React main data accumulate krne ki need nhi html ki tarah ki har jagah se data mang ke au , data ready hai seedha bhejhdo */}
        <br/>
        <button>submit</button> {/*by default button ka type submit hota hai,button pe click krne pr form ka onSubmit event trigger hota hai by default*/}
      </form>
    </div>
  );
}

export default App;
