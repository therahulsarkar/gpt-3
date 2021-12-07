import React from 'react'
import './rahul.css'
import rahul from '../../assets/images/rahul.png'
import { Github } from "react-icons/bi";

function Rahul() {
    return (
        <div className="gpt3__rahul">
        <div className="gpt3__rahul-content">
          <p>Website developed by:</p>
          <h3 className="gradientText">Rahul Sarkar</h3>
          <h5 className="gradientText">Developer, Founder of ZOVO</h5>
          <div class="social-links ">
          <a href="https://github.com/therahulsarkar"><i className="fa fa-github"></i></a>
        <a href="https://facebook.com/therahulsarkar"><i class="fa fa-facebook-square" ></i></a>
        <a href="https://www.instagram.com/rahulsarkr"><i class="fa fa-instagram" ></i></a>
        <a href="https://rahulsarkar.online"><i class="fa fa-globe" ></i></a>
                
              </div>
        </div>

        <div className="gpt3_img">
          <img src={rahul}/>
        </div>
        

      </div>
    )
}

export default Rahul
