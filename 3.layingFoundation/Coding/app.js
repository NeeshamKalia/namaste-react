import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./logo.png";
import user from "./user.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
     <header className='header'>
            <div id = "logo">
                  <img src={logo} alt = "logo" />
            </div>
            <div id = "search-field">
                  <input type="text" placeholder='Search here' />
                  <button type='Submit'>Submit</button>
            </div >
            <div id = "user-icon">
                  <img src={user} alt="user-icon" />
            </div>
     </header>
)
root.render(<React.StrictMode>
      <Header />        //we can also use Header()
    </React.StrictMode>)
