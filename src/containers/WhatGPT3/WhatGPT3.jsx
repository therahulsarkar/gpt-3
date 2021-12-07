import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/feature';
import ai from '../../assets/images/ai.png'

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 sectionMargin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="In May 2020, OpenAI, an AI research lab founded by Elon Musk, launched the latest version of an AI-based Natural Language Processing system named GPT-3 that can mimic human language. This 175-billion parameter deep learning language model was trained on larger text datasets that contain hundreds of billions of words." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradientText">The possibilities of AI are beyond our imagination.</h1>
      <img src={ai}/>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Providing context-sensitive help is quite common in software. But most times users will have secondary questions, and now it’s common to provide chatbots for this purpose. " />
      <Feature title="Mathematical Decoders" text="More than language learning, GPT-3 can learn math. Note that the program will not know all mathematical theories, but it can generate accurate answers to given equations, such as those used in accounting." />
      <Feature title="No-Code Programmers" text="GPT-3 can also directly generate computer programs. Numerous projects have been currently successful in doing so. Apple’s senior frontend engineer Antonio Gomez developed a three-dimensional (3D) scene using a JavaScript (JS) API by merely describing the parameters and elements to use." />
    </div>
  </div>
    )
}

export default WhatGPT3
