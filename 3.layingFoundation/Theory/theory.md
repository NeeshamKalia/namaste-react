                         theory questions ====>

 Role of type attribute in script tag? What options can I use there?

    The "type" attribute specifies the type of content that is inside the script tag file. It tells the browser how to interpret the content of script element. By default it is set to text/javascript
other options include =
text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel : This value indicates that the script is a babel type and required babel to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.

 What is JSX?
    JSX is Javascript XML. It is syntax extension to Javascript which enable us to write HTML-like code inside Javascript instead of using React.createElements which caused maintainability and readability issues.

parcel in reactjs
    bundler that is often used to package a React application's JavaScript, CSS, and other assets into a single bundle for deployment.


Superpowers of JSX.
    JSX is easy to write and maintain.
Ability to write markup and logic of a component inside a single jsx file.
Easy to debug
JSX is type-safe, which means that you can catch errors at compile time rather than at runtime.

what is a react component
    a component is a modular and reusable piece of code that defines the structure and behavior of a part of a user interface.


what is babel and it's use in react
    Babel is a popular JavaScript transpiler that allows developers to write modern JavaScript code (ES6+ -such as arrow functions, classes, and modules,) and then transform it into code that can be executed by older browsers that don't support these features.

    Babel is often used to transform JSX syntax, which is a syntax extension that allows developers to write HTML-like code in their JavaScript files. JSX is not valid JavaScript, so Babel is used to transform this code into valid JavaScript that can be executed by the browser.


{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

            {TitleComponent} means that it could be a expression or a variable embedded in jsx.
{<TitleComponent />} is like a component returning some jsx value. A component is written in < /> syntax.
<TitleComponent></TitleComponent> is used if there are some children components to be included. for e.g.
<TitleComponent>
<FirstChild />
<SecondChild />
</TitleComponent>
