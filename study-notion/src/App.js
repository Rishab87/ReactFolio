import { Routes,Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  return(
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>{/*Use of routes tag and its internal wokring? */}
        <Route path = "/" element = {<Home/>} />{/*hai single page application phir bhi uper url change ho rha hai allag componenet pe jane pe iski internal working*/}
        <Route path= "/login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}> {/*jab login krke home pe click krke dashboard pe click kr rhe tab dashboard khul rha hai pr agar login krke home pe jaake url main /dashboard likhte hai tab wapas login pg pe aa rhe hai kyunki react single page approach pe based hai matlab server se sirf ek baar file load hogi aur phir woh dynamically change ho rhi hai pr jab url main /dashboard likhte hai tab server se dubara se load ho rhi hai matalb isLoggedIn false hogya hai tab*/}
            <Dashboard/>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
};

export default App;
