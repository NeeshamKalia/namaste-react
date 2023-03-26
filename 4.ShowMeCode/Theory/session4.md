Is JSX mandatory for React?
    No, JSX is not mandatory for using React. However it helps us to write react efficiently and the code is easy to read and maintain. Using React.createElement(for example) will make our code very complex for larger applications.


Is ES6 mandatory for React?
    No, ES6 is not mandatory for React. It is modern javascript syntax that saves time and makes it more efficient. However we can write older JS as well.


{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
    With {TitleComponent} we can write any Javascript code like variables/expressions inside {}.
    {<TitleComponent />} is calling the 'TitleComponent' component here which will return some JSX.(it's like calling a Function)
    We use {<TitleComponent><TitleComponent/>} when there's more child components to be added inside it.


How can I write comments in JSX?
    we can write Javascript using {}. And to write comments we can write Javascript comments inside {}, like { //this is a comment}


What is <React.Fragment></React.Fragment> and <></> ?
    React.Fragment is a component provided by React library with which we can group together two or more siblings elements together as JSX returns only one parent. so React.Fragment creates an empty tag within which we can write our "child" tags without creating an additional (say div component). <> </> is just a shorthand syntax for writing <React.Component> </React.Component>.


What is Virtual DOM?
    Virtual DOM is a concept where a virtual representation of a UI is kept in the memory and synced with the real DOM. When the updates are need to be made, a virtual DOM is updated instead of directly manipulating the actual DOM. Once the virtual DOM is updated, it is compared to previous version of virtual DOM to check what changes are needed to be made on the actual DOM and those are made efficiently.


What is Reconciliation in React?
    Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

What is React Fiber?
    React Fiber is a re-implementation of the React core algorithm, designed to improve the performance and flexibility of the React library. It was introduced in React version 16.React Fiber represents a significant improvement to the React library, providing faster and more flexible rendering, improved error handling, and better support for animations.


Why we need keys in React? When do we need keys in React?
    keys act as unique identifier for all react element that helps react differentiate between what changed and what needed to be updated.


Can we use index as keys in React?
    we can use index as key but this is not a good practice. Using index as key can cause performance issues. However using keys are must and index as can use as last resort.


What is props in React? Ways to
What is a Config Driven UI ?
