import React from "react";
import "./header.css";
import people from "../../assets/images/people.png";
import ai from "../../assets/images/robot.png";

const Header = () => {
  return (
    <div className="gpt3Header sectionPadding" id="home">
      <div className="gpt3HeaderContent">
        <h1 className="gradientText">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3HeaderContentInput">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3HeaderContentPeople">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3HeaderImage">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
