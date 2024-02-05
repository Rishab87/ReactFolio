import { useContext, useEffect} from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { Route , Routes } from "react-router-dom";


//If the preferred color mode is changing in your React application without explicit code for handling it, it could be due to the automatic handling of the prefers-color-scheme media query by certain CSS frameworks or browser behavior.

//Some CSS frameworks, like Tailwind CSS, have built-in support for dark mode and can automatically apply styles based on the user's preferred color scheme. If you're using a CSS framework that supports automatic dark mode switching, you might see this behavior without explicitly writing JavaScript code.

//Additionally, some modern browsers automatically apply dark mode styles based on the system or user preferences. This is handled by the browser itself, and you don't need to write specific React code to handle it. 

export default function App() {
  const {fetchBlogPosts , darkMode} = useContext(AppContext);

  const[searchParams , setSearchParams] = useSearchParams();

  const location = useLocation(); 

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1; //iska matlab agar page name ka paramete milgya toh woh use krlo warna page main by default one dalo
    if(location.pathname.includes("tags")){ //current path main tag ki value hai? agar hai toh find out kr rhe hai
      //iska matlab tag wala page show krna hai
      const tag = location.pathname.split("/").at(-1).replace("-" , " ");//location main path main bohot cheeze / ke dvara seperated hai toh.split krke array main last element access krliya kyunki  tags ek dum last main hoga , aur tag - ke sath hai like software-development hum chahte hai - na aye isliye space ke sath replace krdiya , pr waise - kyun nhi chahiye baad main replaceall se space ko - se replace kr rhe hai dusre files main
      // - htakr space isliye lagaya hai kyunki hashtags main do words ke beech main space hona cahiye hai?
      fetchBlogPosts(Number(page) , tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-" , " ");
      fetchBlogPosts(Number(page) ,null, category);
    }
    else{
      //iska matlab normal call gyi hai pages ka data dikhane ke liye
      fetchBlogPosts(Number(page));
    }
  },[location.pathname , location.search]) //jab path main change hoga tab chahte hai use effect chle ,ya jab page change ho tab

  // useEffect(()=>{
  //   setMode();
  // },[]);

  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark");
    }
    else{
      document.body.classList.remove("dark");
    }
  },[darkMode]);

  return(
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/blogs/:blogId" element = {<BlogPage/>}/> {/*jab bhi path main colon(:) ke sath likhte hai text toh uska matlab dynamic route hota hai , matlab blogId variable ki value aajayegi idhr*/}
      <Route path="/tags/:tag" element = {<TagPage/>}/>
      <Route path="/categories/:category" element = {<CategoryPage/>}/>
    </Routes>
  );
};
