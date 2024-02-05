import { useState } from "react";
import Card from "./Card";

const Cards = ({courses,category})=>{
    let allCourses = [];

    const [likedCourses , setLikedCourses] = useState([]); //iske andar course ki id bhejte hai
    //function to put business , design etcc data in one single array so that we can then apply map function on that
    const getCourses = ()=>{
        if(category === "All"){
                    //Object.values se key ki sari values aajayengi
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course); // sare courses ka data single array main daldiya
                });
            });

            return allCourses;
        }
        else{
            return courses[category]; //courses ke andar 4 arrays the alag categories ke
        }

    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course)=>{
               return <Card key={course.id} course = {course} likedCourses = {likedCourses} setLikedCourses={setLikedCourses}/>
            })
        }
        </div>
    );
};

export default Cards;