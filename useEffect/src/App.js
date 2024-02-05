import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [text,setText] = useState("");

  //variation1 --> Willl run on every render of App component
  // useEffect( ()=>{
  //   //jisbhi componenet pe useEffect hook likhte hai woh uss component ke render hote hi chl jayega
  //   //iss component ko chodh ke bahar khi bhi side effect ayega toh usse handle kr skte hai
  //   console.log("UI RENDERING DONE");
  // });

  //variation 2--> will run only on first render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE")
  // },[])//second parameter dependencies ki list ko darshata hai , usko empty pass krdiya , isse sirf first render pr hi yeh useEffect render hoga
//how? empty array pass krne se hokya rha hai behind the scenes?

  //variation 3 --> sirf first render pe chlega ya jab dependency change hogi
  // useEffect(()=>{
  //   console.log("Change observed");
  // },[text]); //first render pe ya jab bhi text ki value change hogi tab yeh chlega , aur ismain bhi bina change ke first time kaise chl rha hai?

  //variation 4 --> to handle unmounting of a component
  //manlo har bar text change hone pr event listener lga rhe hai toh 100 baar text change krne pe 100 eventListener lag jayenge which is not a good practice , toh new event listener lagane se pehle purana remove kre
  //toh useEffect se cleaning up wale task bhi handle kr skte hai
  useEffect(()=>{

    console.log("listener added");

    return ()=>{ //pehle yeh line chlegi phir added wali line chlegi -->why?
      console.log("Listener removed"); //code inside return is used for cleaning
    }
  },[text]); //idhr array jo pass krte hai usse bolte hai dependency list aur andar ke element ko dependency
   //ek term hai component mount krna matlab component render ho chuka hai DOM main , unmount krna matlab DOM se remove krdiya hai 
   //abhi tak hum components functional programming krke bna rhe the , ek aur tareeka hai component bnane ka , class based component pr uski koi need nhi pdegi according to love babbar sir
  
  function changeHandler(event){
    setText(event.target.value)
    console.log(text);
  }

  return (
    <div>
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
