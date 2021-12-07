import './App.css';
import { Article, Brand, CTA, Navbar, Feature, Rahul } from './components'
import { Header, Footer, Blog, Possibility, WhatGPT3, Features } from './containers'
import features from './containers/Features/Features';

function App() {
  return (
    <div className="App">
      <div className="gradientBg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Blog/>
      <CTA/>
      <Rahul/>
      <Footer/>
    </div>
  );
}

export default App;
