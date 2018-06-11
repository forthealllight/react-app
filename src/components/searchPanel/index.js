import './index.less';
import React from 'react';
import search from '../../assets/svgs/search-gray.svg';
export default class SearchPanel extends React.Component{
  render(){
    return <div className="m-search-panel">
        <div className="m-search-panel-date">
           <div className="u-title">DATE</div>
           <div className="u-list">
              <div className="u-item">ANYTIME</div>
              <div className="u-item">TODAY</div>
              <div className="u-item">TOMORROW</div>
           </div>
           <div className="u-list">
             <div className="u-item">THIS WEEK</div>
             <div className="u-item">THIS MONTH</div>
           </div>
           <div className="u-list">
             <div className="u-item">LATER</div>
           </div>
        </div>
        <div className="m-search-panel-channel">
           <div className="u-title">CHANNEL</div>
             <div className="u-list">
                <div className="u-item">All</div>
                <div className="u-item">Channel3</div>
                <div className="u-item">Channel4</div>
             </div>
             <div className="u-list">
                <div className="u-item">Channel1</div>
                <div className="u-item">Channel2</div>
                <div className="u-item">Short</div>
             </div>
             <div className="u-list">
                <div className="u-item">Short</div>
                <div className="u-item">Channel3</div>
                <div className="u-item">Channel4</div>
             </div>
             <div className="u-list">
                <div className="u-item">Channel5</div>
                <div className="u-item">Channel Long Name</div>
             </div>
             <div className="u-list">
                <div className="u-item">Channel6</div>
             </div>
       </div>
       <div className="u-start">
          <div className="u-icon">
            <object  type="image/svg+xml" data={search}>
                search svg
            </object>
          </div>
          <div className="u-text">
              SEARCH
          </div>

       </div>
    </div>
  }
}
