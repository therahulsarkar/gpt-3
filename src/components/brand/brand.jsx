import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox } from './images';

function brand() {
    return (
        <div className="gpt3__brand section__padding">
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
      </div>
    )
}


export default brand
