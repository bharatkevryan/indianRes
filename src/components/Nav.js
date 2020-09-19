import React from 'react'
import '../style/css/bootstrap.css'
import '../style/css/style.css'

import {Link} from 'react-router-dom'

function nav() {
    return (
        <div>
            <div className="container">
    
    <div className="navbar-header">
      <a href="/" className="pull-left visible-md visible-lg visible-sm">
            <div id="logo-img"></div>
        </a>    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
        
      <div className="navbar-brand">
        <a href="/" className="nounderline"><h1>INDIAN CUISINE</h1></a>
      </div>
    </div>

    
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul id="nav-list" className="nav navbar-nav navbar-right">
         <li>
              <a href="/menu">
                <span className="glyphicon glyphicon-cutlery"></span><br className="hidden-xs"/> Menu</a>
            </li>
            <li>
              <a href="/#">
                <span className="glyphicon glyphicon-info-sign"></span><br className="hidden-xs"/> About</a>
            </li>
            <li>
            <a href="/singlemenu/5">
                <span className="glyphicon glyphicon-certificate"></span><br className="hidden-xs"/> Specials</a>
            </li>
            <li id="phone" className="hidden-xs">
              <a href="tel:8586936167">
                <span>+91 8586936167</span></a><div>* We Deliver</div>
            </li>
    
      </ul>
      
   
    </div>
  </div>
        </div>
    )
}

export default nav
