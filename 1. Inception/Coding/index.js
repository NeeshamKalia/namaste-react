
/*
 using Javascript ======>

const root = document.getElementById("root");
const heading = document.createElement("h2");
heading.innerHTML = "Hello from Javascript";

root.appendChild(heading)
*/



//   =====using React ======>

const root = ReactDOM.createRoot(document.getElementById("root"))


const heading1 = React.createElement("h1",
{
    id: "first-heading"
},
"hello from React");

const heading2 = React.createElement("h2" ,
{
    id: "second-heading"
},
"Welcome");

const container = React.createElement("div",
{
    id : "container"
},
[heading1, heading2]
);


root.render(container)
