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
  }
  render(){
    return <div className="m-success">
      <div className="m-success-right">
        <SearchPanel/>
      </div>
      <Menu/>
    </div>
  }
}
