import "./Spinner.css";

function Spinner(){
    return(
        <div className="flex flex-col items-center space-y-2 h-[100vh]">
            <div className="spinner"></div>
            <p className="text-white text-lg font-semibold">Loading....</p>
        </div>
    );
};

export default Spinner;