import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
      <Toaster/>
  </BrowserRouter>
);

// BrowserRouter is a component provided by React Router, a popular routing library for React applications. When you wrap your app with BrowserRouter, it signifies that you want to enable client-side routing in your React application. Let's break down the concepts and understand the internal workings:

// 1. BrowserRouter:
// jsx
// Copy code
// import { BrowserRouter as Router } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       {/* Your application components and routes go here */}
//     </Router>
//   );
// }
// What it Signifies:

// By wrapping your app with BrowserRouter, you are indicating that you want to use browser-based routing for your React application. This enables the application to handle different URLs and render different components based on the URL.
// Internal Working:

// BrowserRouter uses the HTML5 History API to manipulate the browser's history and reflect changes in the URL without triggering a full page reload.
// It listens to changes in the URL and renders the corresponding components based on the defined routes.
// 2. Client-Side Routing:
// Single Page Application (SPA):

// React applications often follow the Single Page Application (SPA) architecture, where the entire application is loaded once, and subsequent interactions with the application are handled by dynamically updating the content on the page without full page reloads.
// URL Changes:

// When you switch to another "page" in a React application with client-side routing, the URL in the browser's address bar changes, triggering the client-side router to update the view.
// Rendering Components:

// React Router defines a set of routes that map specific URLs to React components. When the URL changes, the router determines which route matches the new URL and renders the corresponding component.
// Preventing Full Page Reload:

// The router prevents a full page reload by intercepting navigation events and updating the view using JavaScript, giving the illusion of navigating between different pages.
// Example:
// jsx
// Copy code
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </Router>
//   );
// }
// In this example, the Switch component ensures that only the first matching route is rendered. The Route components define the mapping between URLs and React components. When the URL changes, React Router renders the component associated with the matched route.

// By using client-side routing, you provide a smoother and more dynamic user experience, where navigation happens without full page reloads, and the URL reflects the current state of the application.





// The `Router` component in React Router is a higher-order component that provides the necessary context and infrastructure for managing routing in a React application. When you wrap your application with the `Router`, it ensures that all the components within its hierarchy can access the routing-related information, such as the current URL, history, and location.
// Here's a breakdown of why wrapping your app with `BrowserRouter` is necessary and how it provides the required context:

// 1. **Context API:**
//    - The `Router` uses React's Context API to share routing-related information with its descendants. The context includes data such as the current URL, location, and history object.
//    - Components like `Route` and `Link` access this context to perform their respective functionalities.

// 2. **Route Matching:**
//    - The `Route` component, which is responsible for rendering components based on the current URL, needs access to the routing context to perform route matching.
//    - By wrapping `Route` components with `BrowserRouter`, you ensure that they have access to the necessary routing information.

// 3. **History Management:**
//    - The `BrowserRouter` component uses the HTML5 History API to manage the browser's history. It enables navigation between different pages without triggering full page reloads.
//    - Wrapping your app with `BrowserRouter` ensures that the history is managed appropriately and that components can navigate based on user interactions.

// ### Example:

// ```jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const Home = () => <div>Home Page</div>;
// const About = () => <div>About Page</div>;

// function App() {
//   return (
//     <Router>
//       {/* Wrapping Route components with Router */}
//       <Route path="/" exact component={Home} />
//       <Route path="/about" component={About} />
      
//       {/* Other components and navigation links */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//     </Router>
//   );
// }
// ```

// In this example, `BrowserRouter` is wrapping the entire application (`App` component). This ensures that all components within the `Router` have access to the routing context. You could import `Route` and `Link` directly and use them, but without the `Router` context, they wouldn't have the necessary information to function correctly.

// In summary, wrapping your app with `BrowserRouter` is necessary to establish the routing context, enable route matching, and manage the history of the application. It allows components throughout your app to interact seamlessly with the routing system.