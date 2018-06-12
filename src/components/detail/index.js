import './index.less';
import React from 'react';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';
import user5 from '../../assets/images/user5.jpg';
import user6 from '../../assets/images/user6.jpg';
import user7 from '../../assets/images/user7.jpg';
import image1 from '../../assets/images/image1.jpg';
import gmap from '../../assets/images/gmap.png';
import info from '../../assets/svgs/info.svg';
import people from '../../assets/svgs/people-outline-gray.svg';
import comment from '../../assets/svgs/comment-outline-gray.svg';
import dateFrom from '../../assets/svgs/date-from.svg';
import dateTo from '../../assets/svgs/date-to.svg';
import check from '../../assets/svgs/check-outline-zise.svg';
import like from '../../assets/svgs/like-outline-zise.svg';
import likeBlack from '../../assets/svgs/like-outline.svg';
import commentSim from '../../assets/svgs/comment-single.svg';
import checkGray from '../../assets/svgs/check-outline-gray.svg';
import reply from '../../assets/svgs/reply-green.svg';
export default class Detail extends React.Component{
  render(){
    return <div className="m-detail">
       <div className="m-detail-info">
          <div className="u-channel">Channel name</div>
          <div className="u-title">Activity Title Name Make it Longer May Longer than One Line</div>
          <div className="u-sponsor">
            <div className="u-image">
              <img src={user2}/>
            </div>
            <div className="u-user">
               <div className="u-name">Username</div>
               <div className="u-time">Published 2 days ago</div>
            </div>
          </div>
       </div>
       <div className="m-detail-tab">
          <div className="u-tab">
            <div className="u-icon">
              <object  type="image/svg+xml" data={info}>
                  info svg
              </object>
            </div>
            <div className="u-text">Details</div>
          </div>
          <div className="u-tab">
            <div className="u-icon">
              <object  type="image/svg+xml" data={people}>
                  people svg
              </object>
            </div>
            <div className="u-text">Participants</div>
          </div>
          <div className="u-tab">
            <div className="u-icon">
              <object  type="image/svg+xml" data={comment}>
                  comment svg
              </object>
            </div>
            <div className="u-text">Comments</div>
          </div>
       </div>
       <div className="m-detail-desp">
         <img src={image1}/>
         <div className="u-text">
            [No longer than 300 chars] Vivamus sagittis, diam in lobortis,
            sapien arcu mattis erat, vel aliquet sem urna et risus.
             Ut feugiat sapien mi potenti. Maecenas et enim odio.
             Nullam massa metus, varius quis vehicula sed, pharetra mollis erat.
              In quis viverra velit. Vivamus placerat, est nec hendrerit varius,
               enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus.
               Mauris a orci iaculis, hendrerit eros sed, gravida leo.
            In dictum mauris vel augue varius there is south north asim
         </div>
       </div>
       <div className="m-detail-when">
           <div className="u-tag">When</div>
           <div className="u-time">
              <div className="u-time-detail">
                 <div className="u-time-detail-icon">
                   <div className="u-icon">
                     <object  type="image/svg+xml" data={dateFrom}>
                         dateFrom svg
                     </object>
                   </div>
                   <div className="u-text">15 April 2015</div>
                 </div>
                 <div className="u-time-detail-text"><span className="big">8:30</span> <span className="small">am</span></div>
              </div>
              <div className="u-time-detail">
                <div className="u-time-detail-icon">
                  <div className="u-icon">
                    <object  type="image/svg+xml" data={dateTo}>
                        dateFrom svg
                    </object>
                  </div>
                  <div className="u-text">15 April 2015</div>
                </div>
              </div>
           </div>
       </div>
       <div className="m-detail-where">
          <div className="u-tag">Where</div>
          <div className="u-address">Marina Bay Sands</div>
          <div className="u-subAddress">10 Bayfront Ave, S018956</div>
          <div className="u-image">
            <img src={gmap}/>
          </div>
       </div>
       <div className="m-detail-going">
          <div className="u-container">
             <div className="u-icon">
               <img src={check}/>
             </div>
             <div className="u-text">34 going</div>
          </div>
          <ul className="u-ul">
             <li className="u-li"><img src={user1} /></li>
             <li className="u-li"><img src={user2} /></li>
             <li className="u-li"><img src={user3} /></li>
             <li className="u-li"><img src={user4} /></li>
             <li className="u-li"><img src={user5} /></li>
             <li className="u-li"><img src={user6} /></li>
          </ul>
       </div>
       <div className="m-detail-going">
          <div className="u-container">
             <div className="u-icon">
               <img src={like}/>
             </div>
             <div className="u-text">7 likes</div>
          </div>
          <ul className="u-ul">
             <li className="u-li"><img src={user1} /></li>
             <li className="u-li"><img src={user2} /></li>
             <li className="u-li"><img src={user3} /></li>
             <li className="u-li"><img src={user4} /></li>
          </ul>
       </div>
       <ul className="m-detail-comment">
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
       <div className="m-detail-menu">
         <div className="u-like">
           <div className="u-icon">
             <object  type="image/svg+xml" data={commentSim}>
                 comment svg
             </object>
           </div>
           <div className="u-icon">
             <object  type="image/svg+xml" data={likeBlack}>
                 like svg
             </object>
           </div>
         </div>
         <div className="u-join">
           <div className="u-icon">
             <object  type="image/svg+xml" data={checkGray}>
                 check svg
             </object>
           </div>
           <div className="u-text">join</div>
         </div>
       </div>
    </div>
  }
}
