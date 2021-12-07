import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/images/logo.png';
import face from '../../assets/images/face.png'
const Footer = () => {
    return (
        <div className="gpt3__footer ">
        <div className="gpt3__footer-heading">
          <h1 className="gradientText">Do you want to step in to the future before others?</h1>
          <img src={face} alt="Robot face"/>
        </div>
    
        <div className="gpt3__footer-btn"  onClick={()=>{window.location.href="https://openai.com/"}}>
          <p>Request Early Access</p>
        </div>
    

    
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3_logo" />
            <p>Rahul Sarkar <br /> All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links_div"  onClick={()=>{window.location.href="https://openai.com/"}}>
            <h4 className="gradientText">Links</h4>
            <p>GPT-3</p>
            <p>Social Media</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div"  onClick={()=>{window.location.href="https://openai.com/"}}>
            <h4 className="gradientText">Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div" >
            <h4 className="gradientText">Get in touch</h4>
            <p>Rahul Sarkar</p>
            <p>therahulsarkar@gmail.com</p>
          </div>
        </div>
    
        <div className="gpt3__footer-copyright">
          <p>@2021 GPT-3. All rights reserved.</p>
          <p>UI credits: JSM</p>
        </div>
      </div>
    )
}

export default Footer
