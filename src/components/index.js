import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );

  
export { Home, About, Contact, Navigation };


