import React from 'react'
import '../style/css/style.css'
import '../style/css/bootstrap.css'
import Menu from '../style/images/food1.png'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
function MenuTitles() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const Items = [
        {
            id : 1,
            type : 'breakfast'
        },
        {
            id : 2,
            type : 'Lunch'
        },
        {
            id : 3,
            type : 'snacks'
        },
        {
            id : 4,
            type : 'dinner'
        },
        {
            id : 5,
            type : 'specials'
        }
    ]
    return (
        <div>
            	<div className="text-center">
		<h3>OUR MENU</h3>
		
	</div>
<div className="container" id="menucat">
      		
  <div className="row">
      { Items.map((item, key) => (

          <div key={item.id}className="col-sm-6 col-md-3 col-xs-12">
          <div className="thumbnail">
                  <Link to={process.env.PUBLIC_URL + `/singlemenu/${item.id}`} ><img src={Menu} alt="..." />
              <div className="caption">
      <h3>{item.type}</h3>
              </div>
              </Link>
                          
                          
              
                  
              </div>
        </div>
      ))
        
}	
      </div>
      </div>
        </div>
    )
}

export default MenuTitles
