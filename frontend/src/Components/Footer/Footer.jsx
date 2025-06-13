import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis distinctio id tenetur recusandae saepe, nobis adipisci velit quia repellat maiores similique sapiente nostrum odio unde error quibusdam? Dignissimos, placeat culpa?</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt=""/>
              <img src={assets.linkedin_icon} alt=""/>
              <img src={assets.twitter_icon} alt=""/>
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivey</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91 83788903851</li>
              <li>contact@tomato@.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className='copyright-text'>all rights are reserved by government of india</p>
      </div>
    </div>
  )
}

export default Footer
