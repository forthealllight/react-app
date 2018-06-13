import './index.less';
import React from 'react';
import ActivityList from '../../components/activityList';
import Me from '../../components/me';
import Result from '../../components/result';
import Detail from '../../components/detail';
import search from '../../assets/svgs/search.svg';
import cat from '../../assets/svgs/logo-cat.svg';
import home from '../../assets/svgs/home.svg';
export default class menu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isShowType:0//0的时候表示列表页面，1的时候表示的是当前登陆的用户页,2的时候表示的是详情页
    };
    this.myMenu=React.createRef();
  }
  _changeChannelType=(id)=>{
    let _this=this;
    _this.setState({
      isShowType:id
    });
  }
  _showSearchPanel=()=>{
    let _this=this;
    const {toggleSearchPanel:func}=_this.props;
    func(true);
  }
  _hideSearchPanel=()=>{
    let _this=this;
    const {toggleSearchPanel:func}=_this.props;
    func(false);
  }
  render(){
    let _this=this;
    const {isShowType}=_this.state;
    const {menuStyle,eventsList,isShowResult}=_this.props;
    return <div className="m-menu" ref={_this.myMenu} style={menuStyle}>
      <div className="m-menu-header">
        <div className="search">
          <div className="u-search">
            {
              isShowType==0?
              <object  type="image/svg+xml" data={search} onClick={this._showSearchPanel}>
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
      <div className="m-menu-body" onClick={_this._hideSearchPanel}>
        {isShowType==0&&isShowResult&&<Result/>}
        {isShowType==0&&<ActivityList changeToDetail={_this._changeChannelType.bind(_this,2)} eventsList={eventsList}/>}
        {isShowType==1&&<Me/>}
        {isShowType==2&&<Detail/>}
      </div>
    </div>
  }
}
