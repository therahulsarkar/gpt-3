import React from 'react'
import Feature from '../../components/feature/feature'
import './features.css'
import face from '../../assets/images/head.png'
const featuresData = [
    {
      title: 'Technical support ',
      text: 'Support executives can use this feature to provide relevant answers to service requests quickly.',
    },
    {
      title: 'Developer documentation',
      text: 'This feature of GPT-3 can parse the documents and provide accurate answers to their queries rather than pointing to relevant pages.',
    },
    {
      title: 'Code Oracle',
      text: 'GPT-3 can not only be used for code generation but can also be used for code comprehension. Here’s an example where GPT-3 comprehends the code written in Python language in detail.',
    },
    {
      title: 'The AI recursion',
      text: 'GPT-3 can write ML models for specific tasks and datasets. Here’s an example, where user describes the dataset and the required output and GPT-3 helps us in generating code for an ML model.',
    },
  ];

const Features = () => {
    return (
        <div className="gpt3__features sectionPadding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradientText"> You just need to realize that the future is now. Step into Future today & make it happen.</h1>
      <img src={face}/>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
    )
}

export default Features
