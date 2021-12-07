import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/images/possibility.png';

const Possibility = () => {
    return (
        <div className="gpt3__possibility sectionPadding" id="possibility">
        <div className="gpt3__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
          <h4 onClick={()=>{window.location.href="https://openai.com/blog/openai-api/"}}>Explore the GPT-3 API</h4>
          <h1 className="gradientText">How you can use GPT-3?</h1>
          <p>Currently, GPT-3 is not open-source and OpenAI decided to instead make the model available through a commercial API that you can find on their website. This API is in private beta, which means that you will have to fill out the OpenAI API waitlist form to join the waitlist to use the API.
OpenAI also has a special program for academic researchers who want to use GPT-3. If you want to use GPT-3 for academic research, you should fill out the Academic Access Application.</p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    )
}

export default Possibility
