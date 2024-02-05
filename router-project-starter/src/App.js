import "./App.css";
import {NavLink, Route, Routes} from "react-router-dom";
import { Support } from "./components/Support";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";
import { Labs } from "./components/Labs";
import { MainHeader } from "./components/MainHeader";
// import { Link } from "react-router-dom";

function App() {
  return(
    <div>
    <nav> {/*react works on single pg application approach */}
      <ul>
        <li>
    {/*better method is to use Navlink tag it adds active class and removes it when we select another element which we can style in css, inspect element to check active class added to anchor tag when clicking , link and anchor links gets converted to anchor tag*/}
          <NavLink to="/">Home</NavLink> {/*linking text to routers thru link tag, we need to import link, acts like anchor tag, we can also link to ext urls*/}
        </li>
        <li>
        <NavLink to="/support">Support</NavLink>
        </li>
        <li>
        <NavLink to="/about">About</NavLink>
        </li>
        <li>
        <NavLink to="/labs">Labs</NavLink>
        </li>
      </ul>
    </nav>
    <br/>
    <br/>
      <Routes> {/*we will creat many paths/routes inside this */}
      {/*we can make home parent element kyunki home pg / hai uske baad hi baki pgs aarhe like /about /labs etc, pr phir dusre pg chup jayenge nhi dikhenge unke uper click krke jane pr bhi , toh uske liye home.js file main Outlet tag ka use kre pr usmain bhi ek gadbad hai home page aur dusre componenets dono render ho rhe hai jab kisi nav element pr click kr rhe hai 
      to fix this mainheader name ka componenet bna liya  usmain ek div tage aur uske andar outlet daldiya phir parent element / path wala mainheader krdiya home se
      phir home main home page ka code daldiya outlet hta diya aur home element main index element use krdiya jiska matlab neeche ke kuch bhi route match nhi honge toh home wala route chl jayega
      , but whats the need of this,kyuni iske bina bhi chl rha tha? */}
        <Route path="/" element = {<MainHeader/>}> {/*to create a single route we use route tag */}
        {/*Nested routing , parent child ko render nhi hone deta unless we use Outlet tag--> internal working? */}
          <Route index element = {<Home/>} />
        {/*if we are on / path then it will render the code inside the element */}
          <Route path="/support" element = {<Support/>}/>
          {/*sara code element ke andar na likhne baitha hoch poch hojayega good practice is components bna lo sb pgs ke */}
          <Route path="/about" element = {<About/>}/>
          <Route path="/labs" element = {<Labs/>}/> {/*by default home page pe rhega agar link main / ke baad about dalenge toh about page */}
          <Route path="/*" element = {<NotFound/>}/> {/*agar support about labs yeh chodh ke kuch bhi aur daldiya / ke baad usse handle krne ke liye */} 
        </Route>
      </Routes>
    </div>
  );
}
/*HW: bina / lagaye bhi by default automatic home page aa rha hai kaise? logic kya hai?*/

export default App;
