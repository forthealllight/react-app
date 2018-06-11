import './index.less';
import React from 'react';
import me from '../../assets/images/me.jpg';
import email from '../../assets/svgs/email.svg';
import like from '../../assets/svgs/like-green.svg';
import checkOutline from '../../assets/svgs/check-outline-gray.svg';
import pastOutline from '../../assets/svgs/past-outline-gray.svg';
import ActivityList from '../activityList';
export default class Me extends React.Component{
  render(){
    return <div className="m-me">
      <div className="m-me-header">
        <div className="u-img"><img src={me}/></div>
        <div className="u-user">Username</div>
        <div className="u-email">
          <div className="u-icon">
            <object  type="image/svg+xml" data={email}>
              email svg
            </object>
          </div>
          <div className="u-address">
            myusername@gmail.com
          </div>
        </div>
      </div>
      <div className="m-me-tab">
         <div className="u-like">
           <div className="u-icon">
             <object  type="image/svg+xml" data={like}>
               like svg
             </object>
           </div>
           <div className="u-text">12 Likes</div>
         </div>
         <div className="u-going">
           <div className="u-icon">
             <object  type="image/svg+xml" data={checkOutline}>
               going svg
             </object>
           </div>
           <div className="u-text">0 Going</div>
         </div>
         <div className="u-past">
           <div className="u-icon">
             <object  type="image/svg+xml" data={pastOutline}>
               past svg
             </object>
           </div>
           <div className="u-text">0 past</div>
         </div>
      </div>
      <ActivityList/>
    </div>
  }
}
