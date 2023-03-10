Topics

    JSX
    React.createElement vs JSX
    Benefits of JSX
    Behind the Scenes of JSX
    Babel & parcel role in JSX
    Components
    Functional Components
    Composing Components


Ques.

    What is JSX?
        JSX is Javascript XML. It is syntax extension to Javascript which enable us to write HTML-like code inside Javascript instead of using React.createElements which caused maintainability and readability issues.


    Superpowers of JSX.
        JSX is easy to write and maintain.
        Ability to write markup and logic of a component inside a single jsx file.
        Easy to debug
        JSX is type-safe, which means that you can catch errors at compile time rather than at runtime.


    Role of type attribute in script tag? What options can I use there?
        The "type" attribute specifies the type of content that is inside the script tag file. It tells the browser how to interpret the content of script element. By default it is set to text/javascript
        other options include =
            text/ecmascript : this value indicates that the script is following the EcmaScript standards.
            module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
            text/babel : This value indicates that the script is a babel type and required babel to transpile it.
            text/typescript: As the name suggest the script is written in TypeScript.


    {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
        {TitleComponent} means that it could be a expression or a variable embedded in jsx.
        {<TitleComponent />} is like a component returning some jsx value. A component is written in < /> syntax.
        <TitleComponent></TitleComponent> is used if there are some children components to be included. for e.g.
            <TitleComponent>
                <FirstChild />
                <SecondChild />
            </TitleComponent>
