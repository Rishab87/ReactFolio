import { filterData } from "../data";

function Filter({filterData,category,setCategory}){

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data)=>{
                return(<button key={data.id} onClick={()=> filterHandler(data.title)} className={`text-white text-lg px-2 py-1 rounded-md font-medium bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                ${category === data.title? "opacity-60 border-white": "opacity-40 border-transparent"}
                `}>
                    {data.title}
                </button>);
            })}
        </div>
    );
};

export default Filter;