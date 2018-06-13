import './index.less';
import React from 'react';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';
import user5 from '../../assets/images/user5.jpg';
import user6 from '../../assets/images/user6.jpg';
import user7 from '../../assets/images/user7.jpg';
import reply from '../../assets/svgs/reply-green.svg';
export default class Comment extends React.Component{
  render(){
    return <ul className="m-detail-comment">
      <li className="u-li">
         <div className="u-header">
            <div className="u-icon"><img src={user1}/></div>
         </div>
         <div className="u-desp">
            <div className="u-title"><span className="name">Little Prince</span><span className="time">9 hours ago</span></div>
            <div className="u-content">Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.</div>
         </div>
         <div className="u-return">
            <div className="u-icon"><img src={reply}/></div>
         </div>

      </li>
      <li className="u-li">
        <div className="u-header">
           <div className="u-icon"><img src={user2}/></div>
        </div>
        <div className="u-desp">
           <div className="u-title"><span className="name">Little Prince</span><span className="time">9 hours ago</span></div>
           <div className="u-content">Petus lacus, commodo!!</div>
        </div>
        <div className="u-return">
           <div className="u-icon"><img src={reply}/></div>
        </div>
      </li>
      <li className="u-li">
        <div className="u-header">
           <div className="u-icon"><img src={user3}/></div>
        </div>
        <div className="u-desp">
           <div className="u-title"><span className="name">Little Prince</span><span className="time">9 hours ago</span></div>
           <div className="u-content">Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.</div>
        </div>
        <div className="u-return">
           <div className="u-icon"><img src={reply}/></div>
        </div>
      </li>
      <li className="u-li">
        <div className="u-header">
           <div className="u-icon"><img src={user4}/></div>
        </div>
        <div className="u-desp">
           <div className="u-title"><span className="name">Little Prince</span><span className="time">9 hours ago</span></div>
           <div className="u-content">Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.</div>
        </div>
        <div className="u-return">
           <div className="u-icon"><img src={reply}/></div>
        </div>
      </li>
    </ul>
  }
}
