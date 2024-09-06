import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, explicabo. Dolores, fugiat atque qui pariatur ea quia velit minima labore placeat explicabo illo, repellat laborum incidunt odit possimus perspiciatis expedita.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+22-333-4444-5</li>
                        <li>contact@myapp.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 - All Right Reserved</p>

        </div>
    )
}

export default Footer

