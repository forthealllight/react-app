import './index.less';
import cat from '../../assets/svgs/logo-cat.svg';
import user from '../../assets/svgs/user.svg';
import password from '../../assets/svgs/password.svg';
import React from 'react';
export default class Login extends React.Component {
  _toLogin=()=>{
    let _this=this;
    const {toLogin:func}=_this.props;
    func();
  }
  render() {
    return <div className="m-login">
          <div className="m-login-panel">
              <div className="u-title">FIND THE MOST LOVED ACTIVITIES</div>
              <div className="u-subtitle">BLACK CAT</div>
              <div className="u-logo">
                <object className="u-icon" type="image/svg+xml" data={cat}>
                  logo svg
                </object>
              </div>
              <div className="m-login-panel-input">
                  <div className="u-user">
                     <div className="u-icon-container">
                       <object className="u-icon" type="image/svg+xml" data={user}>
                         user svg
                       </object>
                     </div>
                     <input placeholder="username"/>
                  </div>
                  <div className="u-password">
                     <div className="u-icon-container">
                       <object className="u-icon" type="image/svg+xml" data={password}>
                         password svg
                       </object>
                     </div>
                     <input placeholder="password"/>
                  </div>
              </div>
          </div>
          <div className="m-login-in" onClick={this._toLogin}>SIGN IN</div>
          <div className="m-login-mask"></div>
       </div>
  }
}
