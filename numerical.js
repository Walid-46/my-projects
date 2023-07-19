import React, { Component } from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Taylor from './methodsComp/Taylor';
import Bisection from './methodsComp/Bisection';
import FalsePosition from './methodsComp/FalsePosition';
import Secant from "./methodsComp/Secant";
import Muller from './methodsComp/Muller';
import LuDecomp from './methodsComp/LuDecomp';
import Newton from './methodsComp/Newton';
import Simple from './methodsComp/Simple';

class Numerical extends Component {
constructor (props){
    super(props);
    this.routerRef = React.createRef();
}
render(){
    return (
        <>
        <Router ref={this.routerRef}>
        <div className="Numerical">
          <nav
            className="navbar container"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 ">Numerical Methods Calculator</b>
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
                    <div className= "navbar-menu is-active">
                      <Link to="/" onClick={this.props.page} className="navbar-item">
                  E-commerce
                </Link>
                <Link to="/taylor" className="navbar-item">
                  Taylor
                </Link>

                <Link to="/bisection" className="navbar-item">
                  Bisection
                </Link>
                
                  <Link to="/falsePosition" className="navbar-item">
                    False Position
                  </Link>
                
                  <Link to="/newton" className="navbar-item">
                    Newton Rephson
                  </Link>
                  <Link to="/secant"  className="navbar-item">
                    Secant
                  </Link>
                  <Link to="/muller"  className="navbar-item">
                    Muller
                  </Link>
                  <Link to="/simple"  className="navbar-item">
                    Simple Fixed Point
                  </Link>
                  <Link to="/ludecomp" className="navbar-item">
                    L U Decomposition
                  </Link>            
              </div>
            </nav>
            <Routes>
              <Route exact path="/taylor" element={<Taylor />} />
              <Route exact path="/bisection" element={<Bisection />} />
              <Route exact path="/falsePosition" element={<FalsePosition />} />
              <Route exact path="/newton" element={<Newton />} />
              <Route exact path="/secant" element={<Secant />} />
              <Route exact path="/muller" element={<Muller />} />
              <Route exact path="/simple" element={<Simple />} />
              <Route exact path="/ludecomp" element={<LuDecomp />} />
            </Routes>
          </div>
        </Router>
        </>
    )
}
}
export default Numerical;