import './index.less';
import React from 'react';
import Item from './item/index.js';
export default class ActivityList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {changeToDetail,eventsList}=this.props;
    return <div>
      <Item changeToDetail={changeToDetail}/>
    </div>
  }
}
