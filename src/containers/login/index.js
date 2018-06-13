import './index.less';
import React from 'react';
import cat from '../../assets/svgs/logo-cat.svg';
import user from '../../assets/svgs/user.svg';
import password from '../../assets/svgs/password.svg';
import API from '../../api';
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:this.props.store.username,//登陆用户的名称
      password:this.props.store.password //登陆用户的密码
    };
  }
  _handleUserChange=(event)=>{
    this.setState({
      username:event.target.value
    });
    //更新用户名称
    this.props.store.updateUsername(event.target.value);
  }
  _handlePassChange=(event)=>{
    this.setState({
      password:event.target.value
    });
    //更新用户密码
    this.props.store.updatePassword(event.target.value);
  }
  _toLogin=()=>{
    let _this=this;
    const {toLogin:func}=_this.props;
    //判断登陆是否成功
    fetch('/auth/token',{
          method:'POST',
          body:JSON.stringify({
            username:'aaaa',
            password:123456
          }),
          headers: {
            'Content-Type':'application/json'
          },
        }).
        then(function(response){
          response.json().then(function(res){
            _this.props.store.updateToken(res.token);
            func();
        });
    });
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
                     <input placeholder="username" onChange={this._handleUserChange} value={this.state.username}/>
                  </div>
                  <div className="u-password">
                     <div className="u-icon-container">
                       <object className="u-icon" type="image/svg+xml" data={password}>
                         password svg
                       </object>
                     </div>
                     <input placeholder="password" onChange={this._handlePassChange} value={this.state.password}/>
                  </div>
              </div>
          </div>
          <div className="m-login-in" onClick={this._toLogin}>SIGN IN</div>
          <div className="m-login-mask"></div>
       </div>
  }
}
