import  {FcLike , FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = ({course,likedCourses , setLikedCourses})=>{

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //iska matalb pehle se liked hai
            setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id))); //prev id hai setLiked courses main id pass krte hai array ke andar
            toast.warning("Like Removed!");
        }
        else{
            //pehle se like like nhi hai
            //insert krna h yeh course liked courses main 
            if(likedCourses.length === 0 ){
                setLikedCourses([course.id]);
                toast.success("Liked Successfully!");
            }
            else{
                //agar pehle se liked course main kuch inser t ahi toh
                setLikedCourses((prev) => [...prev,course.id]);
                toast.success("Liked Successfully!");
            }
        }
    };

    return(
        <div className="w-[300px] bg-bgDark rounded-sm overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-4 grid place-items-center">
                    <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize = "1.75rem"/>)
                    }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                {
                    course.description.length >100? 
                    (course.description.substr(0,100)) + "...":
                    (course.description)
                }
                </p>
            </div>
        </div>
    );
};

export default Card;