import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Component/Header.js";
import Footer from "./Component/Footer.js";

import Home from "./Pages/MainPages/HomePage/Home.js";
import Blog from "./Pages/MainPages/Blog.js";
import News from "./Pages/MainPages/News.js";
import About from "./Pages/MainPages/About.js";
import Portfolio from "./Pages/MainPages/PortfolioPage.js";

import Login from "./Pages/LogInForm/Login.js";
import Register from "./Pages/LogInForm/Register.js";



import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
            <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Blog" component={Blog} />
                  <Route exact path="/News" component={News} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/Portfolio" component={Portfolio} />
                  <Route exact path="/Login" component={Login} />
                  <Route exact path="/Register" component={Register} />

                  <Redirect to="404" />
              </Switch>
          </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
