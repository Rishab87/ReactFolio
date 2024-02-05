import Item from "./ components/Item";
import "./App.css";
import ItemDate from "./ components/ItemDate";
import Card from "./ components/Card";

function App() {
  const itemTwoName = "SurfExcel";
  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "1988"
    },
    {
      itemName: "Nirma2",
      itemDate: "202",
      itemMonth: "June2",
      itemYear: "19882"
    },
    {
      itemName: "Nirma3",
      itemDate: "203",
      itemMonth: "June3",
      itemYear: "19883"
    }
  ]; //lets say response api se jo ayaa hai usmain array ki form main data pde hai jismain object hai
   //yeh js ka syntax nhi hai pr phir bhi error nhi de rha kyunki idhr hum ek syntax ka use kr rhe hai jsx syntax , yeh actually js file nhi hai yeh jsx code hai , javascript xml format hai
  return (
    //js ke andar class reserved keyword hai isliye className ka use kr rhe hai
  //npm start wala command iss react ke code ko equivalent js aur html ke code main convert kr rha hai
  //ismain ek top level parent bhi hona chahiye code ka warna error dega -->why?
  //Item ke andar jo name wagera add kiya hai woh properties hai
  //pr ismain bohot code likhna pda har element main alag props pass krne ke liye agar 1000 element hote toh hazaro ke liye yeh thodi krte
  //item ke andar likha hua text tabhi render hoga jab item.js main props.children likhenge
  //same for card uske elements render props.children return kraya hoga Card.js main tabhi render honge
  <div> 
      <Card>
        <Item name= {response[0].itemName}>vfndsjvndfjk</Item>
        <ItemDate day= {response[0].itemDate} month = {response[0].itemMonth}  year = {response[0].itemYear}></ItemDate>

        <Item name={response[1].itemName}></Item> 
        <ItemDate day= {response[1].itemDate} month = {response[1].itemMonth} year = {response[1].itemYear}></ItemDate>

        <Item name= {response[2].itemName}></Item>
        <ItemDate day=  {response[2].itemDate} month =  {response[2].itemMonth} year =  {response[2].itemYear}></ItemDate>
        <div className="App">Hello Jee</div>
      </Card>
      
  </div>

  );
}

//ReactJS is a JavaScript library that allows developers to build user interfaces by creating reusable components. It operates by using a virtual DOM (Document Object Model) to efficiently update the actual DOM. Here's a simplified overview of how React works internally:

// 1. **Components and JSX:**
// - React applications are built using components, which are JavaScript classes or functions.
// - JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code in your JavaScript files.

// 2. **JSX to JavaScript:**
// - JSX code is not directly understood by browsers, so it needs to be transformed into regular JavaScript. This is typically done using a tool like Babel.
// - Babel converts JSX into React.createElement calls. For example, `<div>Hello</div>` in JSX is transformed into `React.createElement('div', null, 'Hello')` in JavaScript.

// 3. **React Elements:**
// - `React.createElement` creates React elements, which are plain JavaScript objects describing what you want to appear on the screen.
// - These elements form a virtual representation of the UI.

// 4. **Virtual DOM:**
// - React keeps a virtual representation of the DOM in memory, known as the Virtual DOM.
// - When there's a change in the state of a component, React creates a new virtual DOM representation.

// 5. **Reconciliation:**
// - React then performs a process called reconciliation to determine the most efficient way to update the actual DOM based on the changes in the virtual DOM.
// - It calculates the minimum number of updates needed to reflect the changes.

// 6. **Actual DOM Update:**
// - React updates the actual DOM with the calculated changes, minimizing the manipulation of the real DOM for improved performance.

// Regarding your question about writing HTML code inside a file and making custom HTML elements with React:

// - With JSX, you can embed HTML-like code directly into your JavaScript files. This is a more convenient and expressive way to define the structure of your components.
// - Custom HTML elements in React are essentially custom components. You can create your own components and reuse them throughout your application.

export default App;

// Certainly! Let's dive into more detail on how React works internally.

// ### 1. **Component Structure:**
//    - React applications are built using components, which can be class components or functional components.
//    - Components are the building blocks of a React application, representing different parts of the user interface.

// ### 2. **JSX and React.createElement:**
//    - JSX is a syntactic sugar for `React.createElement`. It allows you to write HTML-like code within your JavaScript files.
//    - JSX gets transformed into calls to `React.createElement`. For example, this JSX:
//      ```jsx
//      <div>Hello, React!</div>
//      ```
//      gets transformed into:
//      ```javascript
//      React.createElement('div', null, 'Hello, React!')
//      ```

// ### 3. **React Elements:**
//    - `React.createElement` returns a React element, which is a plain JavaScript object describing a component and its props.
//    - React elements are immutable and represent a snapshot of the UI at a specific point in time.

// ### 4. **Virtual DOM:**
//    - React maintains a virtual representation of the DOM in memory, known as the Virtual DOM.
//    - When the state of a component changes, React creates a new virtual DOM representation.

// ### 5. **Reconciliation Algorithm:**
//    - React uses a process called reconciliation to efficiently update the actual DOM.
//    - It compares the new virtual DOM with the previous one and calculates the minimum number of changes needed to update the DOM.

// ### 6. **Diffing Algorithm:**
//    - React uses a "diffing" algorithm to compare the new and old virtual DOM representations.
//    - It identifies the differences (or "diffs") between the two trees.

// ### 7. **Re-rendering and Updating:**
//    - React determines which parts of the actual DOM need to be updated based on the identified differences.
//    - It then re-renders only the components that have changed and updates the actual DOM accordingly.

// ### 8. **Component Lifecycle:**
//    - React components have a lifecycle with various methods (e.g., `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) that developers can use to execute code at different stages of a component's existence.

// ### 9. **State and Props:**
//    - React components can have both state and props. State represents internal data that can change over time, while props are external inputs to a component.

// ### 10. **Custom Components and Composition:**
//    - React allows you to create custom components, encapsulating their logic and UI.
//    - Components can be composed together to build complex user interfaces.

// ### 11. **Event Handling:**
//    - React provides a synthetic event system that normalizes browser inconsistencies, making it easier to handle events across different browsers.

// ### 12. **JSX Compilation:**
//    - Tools like Babel are commonly used to compile JSX code into JavaScript that browsers can understand.

// Understanding these aspects of React's internal workings can provide a more comprehensive view of how React manages the UI and facilitates the creation of dynamic, efficient, and scalable web applications. If you have specific questions about any of these points or if there's a particular area you'd like to explore further, feel free to ask!


// Babel transforms JSX into calls to `React.createElement` by leveraging the fact that JSX is essentially syntactic sugar for function calls. Here's a more detailed explanation of the process:

// 1. **JSX Parsing:**
//    - When Babel encounters JSX in your code, it first parses the JSX syntax.

// 2. **AST Generation:**
//    - Babel then generates an Abstract Syntax Tree (AST) from the parsed JSX code. The AST is a hierarchical representation of the code's structure.

// 3. **Transforming JSX:**
//    - Babel has plugins, such as `@babel/plugin-transform-react-jsx`, that specifically handle JSX transformations.
//    - The plugin traverses the AST and replaces JSX elements with calls to `React.createElement`.

// 4. **Example Transformation:**
//    - For example, given the JSX code:
//      ```jsx
//      <div>Hello, React!</div>
//      ```
//    - The Babel plugin transforms it into the equivalent JavaScript code:
//      ```javascript
//      React.createElement('div', null, 'Hello, React!')
//      ```

// 5. **Creating React Elements:**
//    - The `React.createElement` function takes three arguments:
//      - The type of element (in this case, `'div'` for a `<div>` element).
//      - The properties or "props" of the element (in this case, `null` as there are no additional properties).
//      - The children of the element (in this case, the string `'Hello, React!'`).

// 6. **Nested Elements:**
//    - JSX supports nested elements, and the transformation process is recursive. For example:
//      ```jsx
//      <div>
//        <h1>Hello</h1>
//        <p>React!</p>
//      </div>
//      ```
//      gets transformed into:
//      ```javascript
//      React.createElement('div', null,
//        React.createElement('h1', null, 'Hello'),
//        React.createElement('p', null, 'React!')
//      );
//      ```

// 7. **Babel Configuration:**
//    - Your Babel configuration file, typically named `.babelrc` or specified in your `package.json`, includes settings for the JSX transformation. It specifies the plugins and presets, including the React preset, which includes the JSX transformation plugin.

// Here's a simplified view of how Babel facilitates the transformation of JSX into `React.createElement` calls. The goal is to provide a way for modern JavaScript, including JSX syntax, to be compatible with older browsers or environments that may not support these features directly. If you have more specific questions or if there's a particular aspect you'd like to explore further, feel free to ask!


//In JSX, when you have multiple elements at the same level, they need to be enclosed within a single parent element. This is a requirement because JSX compiles into a single JavaScript `React.createElement` call, and this function expects a single parent element.

// Consider this example:

// ```jsx
// // This will result in a compilation error
// return (
//   <h1>Hello</h1>
//   <p>World</p>
// );
// ```

// The code above will throw a compilation error because JSX must have a single parent element. To fix this, you would wrap the elements in a parent container:

// ```jsx
// // This is valid JSX
// return (
//   <div>
//     <h1>Hello</h1>
//     <p>World</p>
//   </div>
// );
// ```

// The reason for this requirement lies in how React reconciles the virtual DOM and updates the actual DOM. React works by creating a virtual representation of the DOM and then efficiently updating the actual DOM based on the changes. When you have multiple elements at the same level, React needs a way to group them together to understand how they relate to each other.

// By wrapping them in a parent element, you provide a single entry point for React to manage and update. This ensures that React can efficiently perform updates and maintain the integrity of the DOM structure.

// This requirement for a single parent element is a characteristic of JSX and React's approach to managing the DOM. It promotes a clear and predictable structure in the component tree, making it easier for React to handle updates and optimizations.

// Remember that the parent element doesn't have to be a specific HTML element like `<div>`. It can be a `<Fragment>` (or the shorthand `<>`) if you don't want to introduce an additional div into the DOM:

// ```jsx
// // Using React.Fragment or shorthand <>
// return (
//   <>
//     <h1>Hello</h1>
//     <p>World</p>
//   </>
// );
// ```

// This way, you achieve the single parent element requirement without introducing an extra wrapper element in the actual DOM.