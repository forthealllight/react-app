import './index.less';
import React from 'react';
export default class Result extends React.Component{
  render(){
    return <div className="m-result">
      <div className="m-result-container">
        <div className="u-result">
          <div className="u-text">14 Results</div>
          <div className="u-tag">CLEAR SEARCH</div>
        </div>
        <div className="u-date">Searched for Channel 3 Activities from 20/06 to 24/06</div>
      </div>
    </div>
  }
}
