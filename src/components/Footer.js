import React from 'react'
import '../style/css/style.css'
import '../style/css/bootstrap.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div>
                <footer class="panel-footer">
    <div class="container">
      <div class="row">
        <section id="hours" class="col-sm-4">
          <span>Hours:</span><br/>
          Sun-Thurs: 11:15am - 10:00pm<br/>
          Fri: 11:15am - 2:30pm<br/>
          Saturday Closed
          <hr class="visible-xs" />
        </section>
        <section id="address" class="col-sm-4">
          <span>Address:</span><br/>
          Souparnika, NMIT Boys hostel<br/>
          Yelahanka, Bangalore
          <p>* Delivery area within 3-4 miles, with minimum order of ₹100 plus ₹10 charge for all deliveries.</p>
          <hr class="visible-xs" />
        </section>
        <section id="testimonials" class="col-sm-4">
          <p>"The best Indian restaurant I've been to! And that's saying a lot, since I've been to many!"</p>
          <p>"Amazing food! Great service! Couldn't ask for more! I'll be back again and again!"</p>
        </section>
      </div>
      <div class="text-center">&copy; Copyright Bharat Kevinson</div>
    </div>
  </footer>

        </div>
    )
}

export default Footer
