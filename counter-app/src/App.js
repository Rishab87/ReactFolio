import { useState } from "react";
import "./App.css";

function App() {
  //Yes, the function returned by `useState` is part of the React state management mechanism, and when you use it to update the state, React schedules a series of subsequent operations. This is to ensure that the component state is updated in a way that doesn't immediately trigger a re-render but instead batches state updates for optimal performance.

  // Here's how it generally works:

  // 1. **Initial Render:**
  //    - During the initial render of a component, React establishes the initial state and sets up the corresponding state variables.

  //    ```jsx
  //    const [count, setCount] = useState(0);
  //    ```

  //    In this example, `count` is the state variable, and `setCount` is the function provided by `useState` to update the state.

  // 2. **Updating State:**
  //    - When you call `setCount(newValue)`, you're indicating to React that you want to update the `count` state to a new value (`newValue`).

  //    ```jsx
  //    setCount(1);
  //    ```

  // 3. **Scheduling:**
  //    - Instead of immediately re-rendering the component, React schedules a series of operations.

  // 4. **Batching Updates:**
  //    - React batches state updates for performance reasons. If there are multiple state updates within the same synchronous event (like a user click or a network request), React batches them together.

  //    ```jsx
  //    setCount(1);
  //    setCount(2);
  //    ```

  //    These two updates might be batched into a single update, ensuring that React doesn't perform unnecessary intermediate renders.

  // 5. **Reconciliation and Re-render:**
  //    - After the batched updates are scheduled, React performs a process called reconciliation.
  //    - During reconciliation, React compares the previous and new state, determines the minimal set of changes needed, and updates the virtual DOM accordingly.

  // 6. **Efficient DOM Update:**
  //    - React then updates the actual DOM to reflect the changes determined during reconciliation.
  //    - This is an efficient process that minimizes the number of DOM manipulations for better performance.

  // By scheduling state updates and batch processing them, React can optimize the rendering process and avoid unnecessary re-renders for each individual state update. This helps in providing a more efficient and performant user interface.

  const [count , setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1); //note: variable ki value bhi set hojati hai set count se aur UI pe bhi render hojata hai
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] flex-col gap-10 bg-[#344151]">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decremenet</div>
      <div className="flex items-center bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
        reset
      </button>
    </div>
  );
}

export default App;
 