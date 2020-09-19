import React from 'react'
import '../style/css/style.css'
import '../style/css/bootstrap.css'
import MenuPic from '../style/images/menu.png'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function MenuSingleTile({match}) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const menuItems = [
        [{
            id : 1,
            price : 40,
            imgid : 1,
            des : 'dosa with chutney'
        },
        {
            id : 2,
            price : 50,
            imgid : 2,
            des : 'Mysore masala dosa' 
        }],
        [{
                id : 1,
                price : 60,
                imgid : 1,
                des : 'puri Chole'
            },
            {
                id : 2,
                price : 70,
                imgid : 2,
                des : 'aloo paratha' 
        }],
        [{
            id : 1,
            price : 40,
            imgid : 1,
            des : 'burger'
        },
        {
            id : 2,
            price : 50,
            imgid : 2,
            des : 'Pizza' 
        }],
        [{
            id : 1,
            price : 40,
            imgid : 1,
            des : 'chicken doh pyaza'
        },
        {
            id : 2,
            price : 50,
            imgid : 2,
            des : 'butter naan' 
        }],
        [{
            id : 1,
            price : 40,
            imgid : 1,
            des : 'falooda'
        },
        {
            id : 2,
            price : 50,
            imgid : 2,
            des : 'ice cream' 
        }]

    ]
    console.log(menuItems)
    return (
        <div>
                <div className="text-center">
    <h3>OUR MENU</h3>
    
  </div>
  <div className="container" id="single-menu">
        <section className="row">
  { 
        menuItems[match.params.id-1].map((item,key) => (
       
         <div className="menu-item-tile col-md-6 col-sm-12" key={item.id}>
           <div className="col-sm-5">
               <div className="menu-item-photo">
                   <div>D01</div>
                   <img className="img-responsive" width="250" height="150" src={MenuPic} alt="Item" />
                 </div>
                 <div className="menu-item-price">{item.price}<span> (Full)</span> &#8377; 14.95 <span>(Half)</span></div>
             
           </div>
           <div className="col-sm-7">
              <h3 className="menu-item-title">{item.des}</h3>
                 <p className="menu-item-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque inventore esse minima incidunt impedit. Asperiores, voluptatem. Sint aspernatur provident, rem odio dolorem eaque voluptatibus modi reprehenderit minima, itaque cupiditate totam.</p>
           </div>
         </div>
          ))
  }

  </section>
 </div>
            
</div>
 
  
    )
}

export default MenuSingleTile
