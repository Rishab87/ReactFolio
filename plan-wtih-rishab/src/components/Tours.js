import Card from "./Card";
//props gets passed in form of object and inside Tours function we are destructuring that object

function Tours({tours , removeTour}){//It is using destructuring in the function parameter list to extract specific properties from an object. In this case, the function expects an object as its argument, and it's extracting two properties: tours and removeTour. This pattern is commonly used for passing props to functional components.
    //ek hi baar card likh kr 7 cards bna rhe hai with help of map function
    //a good practice when using map is to pass a key with a unique indentifier if not unique identifier not present pass index but index pass krne ko achi practice nhi mana jata -->but why?
    //{...tour}: The spread operator ({...tour}) is used to pass all properties of the tour object as individual props to the Card component.
    //HW: Read list and keys doc on react official website

    //The reason you see the Card components on the UI even though they are inside an array is that React knows how to handle arrays of elements in JSX. It renders each element in the array, and the resulting UI reflects the structure you've defined. -->Internal working? 
    //We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. Check out Robin Pokorny’s article for an in-depth explanation on the negative impacts of using an index as a key. If you choose not to assign an explicit key to list items then React will default to using indexes as keys.

    //Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Rishab</h2>
            </div>

            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;