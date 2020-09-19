import React from 'react'
import '../style/css/style.css'
import '../style/css/bootstrap.css'
import Logo from "../style/images/food.png"
import Iframe from 'react-iframe'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ResImg from '../style/images/rest768.jpg'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
             <div className="container" id="jumbo">
    <div className="jumbotron">
  <img src={ResImg} className= "img-responsive visible-xs"/>
  
</div>
  </div>
  <div className="container" id="menu">
    <div className="row">
  <div className="col-sm-6 col-md-4 col-xs-12">
    <div className="thumbnail">
      <Link to="/menu">
      <img src={Logo} alt="..." />
      <div className="caption">
        <h3>MENU</h3>
        <p>With all its exotic ingredients, unfamiliar dishes, and tongue-tingling flavors, Indian cuisine can be both exciting and intimidating. “It’s such a complete world of taste. You combine all the techniques from other cuisines and add magical spices to get a titillating food experience,” </p>
        
      </div>
      </Link>
    </div>
  </div>
  <div className="col-sm-6 col-md-4 col-xs-12">
    <div className="thumbnail">
      <Link to="/singlemenu/5">
      <img src={Logo} alt="..." />
      <div className="caption">
        <h3>SPECIALS</h3>
        <p>"Try out our specials, you ain't gonna regret!"</p>
        
      </div>
      </Link>
    </div>
  </div>
  <div className="col-sm-12 col-md-4 col-xs-12">
    <div className="thumbnail">
    
          <div id="map-tile">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675372390488!2d-76.71386218529199!3d39.3635874269356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid+Chu&#39;s+China+Bistro!5e0!3m2!1sen!2sus!4v1452824864156" width="100%" height="235" frameborder="0" style="border:0" allowfullscreen />
            
          </div>
          <div className="caption">
          <a href="https://www.google.com/maps/place/David+Chu's+China+Bistro/@39.3635874,-76.7138622,17z/data=!4m6!1m3!3m2!1s0x89c81a14e7817803:0xab20a0e99daa17ea!2sDavid+Chu's+China+Bistro!3m1!1s0x89c81a14e7817803:0xab20a0e99daa17ea" target="_blank"></a>
            <h3>MAP</h3>
        <p>With all its exotic ingredients, unfamiliar dishes, and tongue-tingling flavors, Indian cuisine can be both exciting and intimidating. “It’s such a complete world of taste. You combine all the techniques from other cuisines and add magical spices to get a titillating food experience,” </p>
        
      </div>   

        </div>
  </div>
</div>
  </div>
        </div>
    )
}

export default Home
