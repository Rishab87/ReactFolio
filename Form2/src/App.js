import { useState } from "react";
import "./App.css";

function App() {

  const [formData , setFormData] = useState({firstName: "" , lastName: "" , email: "" , country: "" , address: "" , city: "" , state: "", zip:"" , comments: true , candidates: true , offers: true , notifications: ""});

  function changeHandler(event){
    const {type , name , value ,checked} = event.target;
    setFormData(setPrevState =>{return{
      ...setPrevState,
      [name]: type=== "checkbox"?checked:value
    }   
  })
  }
  //name: It's the name of the input field, and it is used to dynamically determine which property of the prevFormData object should be updated.
// [name]: This is a feature of JavaScript called computed property names. It allows you to use an expression, like a variable, as a property name. In this case, the value of name is dynamically used as the property name.
// The reason for using square brackets is to enable dynamic property names. Without square brackets, you would be setting the property literally named "name" on the prevFormData object, which is not what you want. By using square brackets, you dynamically set the property name based on the value of the name variable.
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="firstName" onChange={changeHandler} value={formData.firstName}></input>
        <input type="text" name="lastName" onChange={changeHandler} value={formData.lastName}></input>
        <input type="text" name="email" onChange={changeHandler} value={formData.email}></input>
        <input type="text" name="country" onChange={changeHandler} value={formData.country}></input>
        <input type="text" name="address" onChange={changeHandler} value={formData.address}></input>
        <input type="text" name="city" onChange={changeHandler} value={formData.city}></input>
        <input type="text" name="state" onChange={changeHandler} value={formData.state}></input>
        <input type="text" name="zip" onChange={changeHandler} value={formData.zip}></input>

        <label htmlFor="comments">comments</label>
        <input type="checkbox" onChange={changeHandler}  name="comments" id="comments" checked = {formData.comments}></input>

        <label htmlFor="candidates">candidates</label>
        <input type="checkbox" onChange={changeHandler}  name="candidates" id="candidates" checked = {formData.candidates}></input>

        <label htmlFor="offers">offers</label>
        <input type="checkbox" onChange={changeHandler}  name="offers" id="comments" offers = {formData.offers}></input>

        <label htmlFor="notifications">Everything</label>
        <input type="radio" onChange={changeHandler}  id="notifications" name="notifications" value= "Everything" checked = {formData.notifications === "Everything"}></input>

        <label htmlFor="notifications">Same as email</label>
        <input type="radio" onChange={changeHandler}  id="notifications" name="notifications" value= "same as email" checked = {formData.notifications === "same as email"}></input>

        <label htmlFor="notifications">no push notifications</label>
        <input type="radio" onChange={changeHandler}  id="notifications" name="notifications" value= "no push notifications" checked = {formData.notifications === "no push notifications"}></input>

        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
