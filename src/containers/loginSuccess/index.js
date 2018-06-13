import './index.less';
import React from 'react';
import {observer} from 'mobx-react';
import Menu from '../../components/menu';
import SearchPanel from '../../components/searchPanel';
import API from '../../api';
export default
@observer
class LoginSuccess extends React.Component{
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
    };
  }
  componentDidMount(){
    let _this=this;
    fetch(API.getEvents,{
          method:'GET',
          headers: {
            'Content-Type':'application/json',
            'X-BLACKCAT-TOKEN':this.props.store.token
          },
        }).
        then(function(response){
          response.json().then(function(res){
            _this.props.store.updateEventList(res.events);
        });
    });
  }
  render(){
    let obj={};
    obj.display=this.state.isShowPanel?'block':'none';
    let menuObj={};
    menuObj.left=this.state.isShowPanel?'70%':'0';
    const {eventsList,isShowResult}=this.props.store;
    return <div className="m-success">
      <div className="m-success-right" style={obj}>
        <SearchPanel hideSearchPanel={this._toggleSearchPanel}/>
      </div>
      <Menu toggleSearchPanel={this._toggleSearchPanel} menuStyle={menuObj}
        eventsList={eventsList} isShowResult={isShowResult}/>
    </div>
  }
}
