import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
import { useNavigate } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";

//step1
export const AppContext = createContext();

export default function AppContextProvider({children}){ //iss function se wrap kra hai App.js ko
    const [loading , setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const [darkMode , setDarkMode] = useState(true);
    const navigate = useNavigate();
    
    // function setMode(){
    //     const systemPrefersDark = useMediaQuery(
    //         {
    //           query: "(prefers-color-scheme: dark)",
    //         },
    //         undefined,
    //         (darkMode) => setDarkMode(darkMode)
    //       );
    //     if(darkMode === undefined){
    //         setDarkMode(false);
    //     }
    // }

    //data filling
    async function fetchBlogPosts(page , tag , category){
        setLoading(true);
        //get-blogs ya url main kya likhna hai yeh API documentation se pta chl jayega
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url+= `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        console.log(url)
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            alert("Could not fetch data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate({search: `?page=${page}`});
        setPage(page);
        
    }

//value main sara ka sara data hai , value is like a snapshot of data
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
        darkMode,
        setDarkMode
    };
    //step 2
    //humne children(iss case main App.js , kyunki AppContextProvider function App ka parent hai index.js main) ko value wala object dediya hai provider ke through 
    return <AppContext.Provider value={value}> 
        {children}
    </AppContext.Provider>
};

//The Context API in React provides a way to share values like props between components without having to pass them explicitly through each level of the component tree. The `Context.Provider` element is a fundamental part of this API, and it plays a key role in making values available to nested components.

// Here's an in-depth explanation of how the Context API works internally, focusing on the `Context.Provider` element:

// ### Context Creation:

// 1. **Create a Context:**
//    - You first create a context using `React.createContext()`. This returns an object with `Provider` and `Consumer` components.

//    ```jsx
//    const AppContext = React.createContext();
//    ```

// ### `Context.Provider`:

// 2. **Wrap Components with `Context.Provider`:**
//    - The `Context.Provider` component is used to wrap the part of the component tree where you want to make the context values available.

//    ```jsx
//    const App = () => {
//      return (
//        <AppContext.Provider value={{ user: 'John' }}>
//          <ChildComponent />
//        </AppContext.Provider>
//      );
//    };
//    ```

//    - In this example, the `value` prop is set to an object `{ user: 'John' }`, and this object will be the shared context value for components within the `AppContext.Provider`.

// 3. **Internal Working:**
//    - When `App` renders, the `AppContext.Provider` component creates a new context scope. It stores the provided `value` internally and makes it available to any descendant components that subscribe to this context.

//    - Internally, React uses a subscription model. Components using `AppContext.Consumer` or `useContext(AppContext)` subscribe to changes in the context value. When the context value changes, these components will re-render.

// ### `Context.Consumer` and `useContext`:

// 4. **Consume the Context Value:**
//    - Components that need access to the context value can use either `AppContext.Consumer` or the `useContext` hook.

//    ```jsx
//    const ChildComponent = () => {
//      const contextValue = React.useContext(AppContext);

//      return <div>{contextValue.user}</div>;
//    };
//    ```

//    - The `ChildComponent` receives the context value through the `useContext` hook.

// ### Context Value Changes:

// 5. **Updating Context Value:**
//    - If the context value provided by `AppContext.Provider` changes (due to a state update or other reasons), React will trigger re-renders for all components subscribed to this context.

//    - This ensures that components consuming the context value are always displaying the latest data.

// ### Benefits:

// - **Avoiding Prop Drilling:**
//   - Context API helps avoid prop drilling by providing a way to share values down the component tree without passing them through intermediary components.

// - **Dynamic Scoping:**
//   - Context allows for dynamic scoping, meaning that the context value can change at different levels of the component tree without the need for explicit prop passing.

// - **Efficient Updates:**
//   - React efficiently updates only the components that depend on the changed context value, reducing unnecessary renders.

// In summary, the `Context.Provider` element in the Context API serves as a boundary where context values are provided to the component tree. Components within this boundary can consume the context value using `AppContext.Consumer` or the `useContext` hook. The internal subscription mechanism ensures that components re-render when the context value changes, providing a flexible and efficient way to share values across the application.


// When you wrap your app with the `AppContext.Provider`, you are essentially establishing a boundary at which the context value is defined and made available to all the components nested within that boundary. This is how data is transferred through the Context API in React. Let's break down the process in more detail:

// 1. **Create a Context:**
//    - You create a context using `React.createContext()`.

//    ```jsx
//    const AppContext = React.createContext();
//    ```

// 2. **Wrap App with `AppContext.Provider`:**
//    - You wrap your entire app (or a section of it) with the `AppContext.Provider`.

//    ```jsx
//    const App = () => {
//      return (
//        <AppContext.Provider value={{ user: 'John' }}>
//          {/* The rest of your app components */}
//        </AppContext.Provider>
//      );
//    };
//    ```

//    - The `value` prop of `AppContext.Provider` is where you define the data you want to share. In this case, it's an object `{ user: 'John' }`.

// 3. **Access Context Value in Nested Components:**
//    - Components nested within the `AppContext.Provider` can access the context value using either `AppContext.Consumer` or the `useContext` hook.

//    ```jsx
//    const ChildComponent = () => {
//      const contextValue = React.useContext(AppContext);

//      return <div>{contextValue.user}</div>;
//    };
//    ```

//    - In this example, `ChildComponent` is consuming the `AppContext` using the `useContext` hook.

// 4. **Propagation of Context Value:**
//    - The magic happens when the `AppContext.Provider` component is rendered. React makes sure that all components consuming `AppContext` within its subtree are aware of the context value.

//    - When you provide a new value to the `AppContext.Provider`, React automatically re-renders all components that consume this context.

//    - The context value is effectively "propagated" down the component tree, and any component that subscribes to this context will receive the updated value.

// 5. **Re-rendering on Context Value Change:**
//    - If the context value changes (due to a state update, for example), React efficiently re-renders only the components that depend on the changed context value.

//    - This ensures that your components always have access to the latest data provided by the context.

// In summary, the `AppContext.Provider` component establishes a scope where the context value is defined and made available. When you wrap your app with it, React ensures that the context value is efficiently passed down to all components within the scope. Components consuming the context are automatically re-rendered when the context value changes, providing a mechanism for sharing and updating data across your application.

