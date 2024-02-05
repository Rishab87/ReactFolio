import React, { useEffect, useState } from "react";
import {apiUrl , filterData} from "./data"
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Card from "./components/Card";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
//HW: empty wale case mai  no data found dikhana hai , error 404 wale case main ke kuch print krna hai
const App = () => {

  const [courses, setCourses] = useState([]);//yeh code null ke sath initialize krke aur bina loading screen ke error de raha tha kynuki jab tak response nhi ayaa tab tak code iss null object ke uper chlne laga tha matlab null ke uper forEach loop wagera chlne lge the , agar hum chahte hai ki bina loading screen ke bhi kam kre toh empty array se intialize krna pdega kyunki empty array ke sath Cards ke andar  jo Object.values wala function hai woh bhi chl jata hai , value ate hi setCourses chl rha hai phir se elements render honge UI pe toh phir data ajayega UI pr sara
  const [loading,setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      if(!response.ok){
        throw Error("404");
      }
      //save data into a variable
      setCourses(data.data); //api se jo data aa rha hai usmain key ka name bhi data hai isliye data.data likha hai
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return(
    <div className="min-h-screen flex flex-col overlflow-y-auto overflow-x-hidden h-[100vh] bg-bgDark2">

      <div>
        <Navbar/>
      </div>

      <div className="overflow-y w-[100vw]">
        <div>
          <Filter filterData = {filterData} category ={category} setCategory= {setCategory}/>
        </div>
          
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
          {
            loading? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
          }
        </div>
    </div>
     
   
      
    </div>
  );
};

export default App;
