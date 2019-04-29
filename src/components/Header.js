import React from 'react'

class Header extends React.Component{
    render(){
      return(
        <header id="header">
          <div id="topbar">
          
            <div className="container">
             <div className="social-links">
             <a href="app.pluralsight.com" class="twitter"><i class="fa fa-twitter"></i></a>
            <a href="app.pluralsight.com" class="facebook"><i class="fa fa-facebook"></i></a>
            <a href="app.pluralsight.com" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="app.pluralsight.com" class="instagram"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="container">
        
          <div className="logo float-left">
            <h1 className="text-light"><a href="#info" className="scrollto"><span>Greenpaperbag</span></a></h1>
          </div>
      {/* <button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button> */} 
          <nav className="main-nav float-right d-none d-lg-block">
        
            <ul>
            <li className="active"><a href="#intro">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li class="drop-down"><a href="app.pluralsight.com">Drop Down</a>
              <ul>
              <li><a href="app.pluralsight.com">Drop Down 1</a></li>
                <li className="drop-down"><a href="app.pluralsight.com">Drop Down 2</a>
                <ul>
                <li><a href="app.pluralsight.com">Deep Drop Down 1</a></li>
                    <li><a href="app.pluralsight.com">Deep Drop Down 2</a></li>
                    <li><a href="app.pluralsight.com">Deep Drop Down 3</a></li>
                    <li><a href="app.pluralsight.com">Deep Drop Down 4</a></li>
                    <li><a href="app.pluralsight.com">Deep Drop Down 5</a></li>
                </ul>
                </li>
                <li>
                <li><a href="app.pluralsight.com">Drop Down 3</a></li>
                <li><a href="app.pluralsight.com">Drop Down 4</a></li>
                <li><a href="app.pluralsight.com">Drop Down 5</a></li>
                </li>
            </ul>
            </li>
            <li><a href="#footer">Contact Us</a></li>
            </ul>
      
          </nav>
          
        </div>
        </header>
        
      )
    }
  }
  export default Header