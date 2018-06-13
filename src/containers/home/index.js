import './index.less';
import {observer} from 'mobx-react';
import React from 'react';
import Login from '../login';
import Menu from '../../components/menu';
import LoginSuccess from '../loginSuccess';
import myFetch from '../../fetch';
export default
@observer
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogin:false
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
    const {store}=this.props;
    return isLogin?<LoginSuccess store={store}/>:<Login toLogin={_this._clickToLogin} store={store}/>;
  }
}
