import './index.less';
import React from 'react';
import ActivityList from '../../components/activityList';
import Me from '../../components/me';
import search from '../../assets/svgs/search.svg';
import cat from '../../assets/svgs/logo-cat.svg';
import home from '../../assets/svgs/home.svg';
export default class menu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isShowType:0//0的时候表示列表页面，1的时候表示的是当前登陆的用户页
    };
  }
  _changeChannelType=(id)=>{
    let _this=this;
    _this.setState({
      isShowType:id
    });
  }
  render(){
    let _this=this;
    const {isShowType}=_this.state;
    return <div className="m-menu">
      <div className="m-menu-header">
        <div className="search">
          <div className="u-search">
            {
              isShowType==0?
              <object  type="image/svg+xml" data={search}>
                search svg
              </object>:<object  type="image/svg+xml" data={home} onClick={this._changeChannelType.bind(_this,0)}>
                  home svg
                </object>
            }
          </div>
        </div>
        <div className="logo">
          <div className="u-logo">
            <object className="u-icon" type="image/svg+xml" data={cat}>
              logo svg
            </object>
          </div>
        </div>
        <div className="me">
          <div className="u-me" onClick={_this._changeChannelType.bind(_this,1)}></div>
        </div>
      </div>
      <div className="m-menu-body">
        {isShowType==0?<ActivityList/>:<Me/>}
      </div>
    </div>
  }
}
