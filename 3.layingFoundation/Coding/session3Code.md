import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

/* const heading1 = React.createElement("h1", {}, "Heading1");
const heading2 = React.createElement("h2", {}, "Heading 2");
const heading3 = React.createElement("h3", {}, "Heading3");

const header = React.createElement("div", {className: "title"}, [heading1, heading2, heading3]) */;

//root.render(header);

/* Create the same element using JSX */

/*     const headerJSX = (
        <div className= "title">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    )
    root.render(headerJSX) */


//Create a functional component of the same with JSX----

/* const HeaderJX = () =>  (
    <div className= "title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

root.render(<HeaderJX />) */


//Composition of Component (Add a component inside another)

/* const Heading1 = () => (
    <h1>Heading One</h1>
)

const HeaderComp = () => (
    <div className='titleJSX'>
        <Heading1 />
        <h2>Heading 2nd</h2>
        <h3>Heading the Third</h3>
    </div>
)


root.render(<HeaderComp />) */

// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
/* const Heading1 = () => (
    <h1>Heading One</h1>
)

const HeaderComp = () => (
    <div className='titleJSX'>

        <h2>Heading 2nd</h2>
        <h3>Heading the Third</h3>
    </div>
)
root.render(<div><Heading1 /><HeaderComp /></div>) */
