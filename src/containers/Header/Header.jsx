import React from "react";
import "./header.css";
import people from "../../assets/images/people.png";
import ai from "../../assets/images/robot.png";

const Header = () => {
  return (
    <div className="gpt3Header sectionPadding" id="home">
      <div className="gpt3HeaderContent">
        <h1 className="gradientText">
          Let&apos;s build the future of web with GPT-3 OpenAI.
        </h1>
        <p>
        GPT-3 is a language model that was created by OpenAI, an artificial intelligence research laboratory in San Francisco. The 175-billion parameter deep learning model is capable of producing human-like text and was trained on large text datasets with hundreds of billions of words.
        </p>

        <div className="gpt3HeaderContentInput">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3HeaderContentPeople">
          <img src={people} />
          <p>1,500 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3HeaderImage">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
