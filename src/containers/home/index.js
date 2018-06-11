import './index.less';
import React from 'react';
import Login from '../login';
import Menu from '../menu';
import LoginSuccess from '../loginSuccess';
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogin:true
    };
  }
  /**
   * 判断登陆的方法，如果登陆成功则跳转到菜单页
   * @return {[type]} [description]
   */
  _clickToLogin=()=>{
    let _this=this;
    _this.setState({
      isLogin:true
    });
  }
  render(){
    let _this=this;
    const {isLogin}=_this.state;
    return isLogin?<LoginSuccess/>:<Login toLogin={_this._clickToLogin}/>;
  }
}
