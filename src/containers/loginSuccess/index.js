import './index.less';
import React from 'react';
import Menu from '../../components/menu';
import SearchPanel from '../../components/searchPanel';
export default class LoginSuccess extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isShowPanel:false
    };
    this.myMenu=React.createRef();
  }
  _toggleSearchPanel=(tag)=>{
    if(tag){
      this.setState({
        isShowPanel:true
      });
    }else{
      this.setState({
        isShowPanel:false
      });
    }
  }
  render(){
    let obj={};
    obj.display=this.state.isShowPanel?'block':'none';
    let menuObj={};
    menuObj.left=this.state.isShowPanel?'70%':'0';
    return <div className="m-success">
      <div className="m-success-right" style={obj}>
        <SearchPanel hideSearchPanel={this._toggleSearchPanel}/>
      </div>
      <Menu toggleSearchPanel={this._toggleSearchPanel} menuStyle={menuObj}/>
    </div>
  }
}
