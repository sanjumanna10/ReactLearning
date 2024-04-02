import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {id:"heading"},"hello world from React world cup");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

// const jsxHeading =  (
// <h1 >
// I love JSX!
// </h1>);
// const HeadingComponet = () => {
//         return <h1>namste react funtionall component</h1>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponet/>);

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

