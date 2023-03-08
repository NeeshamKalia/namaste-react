 1.   What is Emmet?
        Emmet is a web development tool in editors that allows us to write HTML and CSS code using abbreviations or shortcuts, and then expand them into full code snippets.

2.    Difference between a Library and Framework?
        A library is a collection of pre-written code that can be used to perform specific functions.
        Libraries are typically focused on solving a specific problem or set of problems and offer a lot of flexibility and control to the developer in terms of how they integrate the library into their program.

        A framework, on the other hand, is a more comprehensive tool that provides a set of guidelines, rules, and best practices for building an application. Frameworks typically provide a complete architecture for the application, including a set of libraries and tools that work together to provide a cohesive development environment.


3.  What is CDN? Why do we use it?
        A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading time by routing the client's request to the nearest geographically located server.
        When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.
        They decrease web traffic to the web server, reduce bandwidth consumption,Improve website security,  and improve the user experience of your applications.


4.  Why is React known as React?
        It’s called React because it reacts to the changes in the data. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.

5. What is crossorigin in script tag?
        The crossorigin attribute allows web developers to indicate whether a script file being loaded should be treated as same-origin or cross-origin. If the attribute is set to "anonymous", the script file is loaded from a different origin and is not allowed to access resources on the page. If the attribute is set to "use-credentials", the script file is loaded from a different origin and is allowed to access resources on the page, but only if the server hosting the script file is configured
        <script crossorigin="anonymous|use-credentials">

6. What is difference between React and ReactDOM?
        React is a library for building UI components, while ReactDOM is a library for rendering those components to the DOM and managing the application's interaction with the web platform. While React can be used in other environments, such as mobile or desktop applications, ReactDOM is specifically focused on the web platform.

7. What is difference between react.development.js and react.production.js files via CDN?
        The difference between these two versions is that the development version is larger and contains additional error-checking and debugging information, while the production version is smaller and optimized for performance.Development build is several times (maybe 3-5x) slower than the production build.



8.   What is async and defer?
        The async attribute is used to download and execute a script file asynchronously while continuing to load the page. This means that the script file is downloaded in the background while the page continues to load. Once the file is downloaded, it is executed as soon as it is available, which may be before the page has finished loading.
        <script src="demo_async.js" async></script>
        while the defer attribute is used to download a script file in the background while the page is loading, and defer execution until after the page has finished loading. If the order of execution of scripts is important, defer is recommended, but if the script does not need to wait for the page to finish loading, async can be used for improved performance.
         <script src="demo_defer.js" defer></script>
