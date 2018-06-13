import './index.less';
import React from 'react';
import classnames from 'classnames';
import search from '../../assets/svgs/search-gray.svg';
export default class SearchPanel extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectDateId:0,
      selectChannelId:0,
      active:false
    };
  }
  _hideSearchPanel=()=>{
    let _this=this;
    const {hideSearchPanel:func}=_this.props;
    func(false);
  }
  _onSelectDate=(id)=>{
    this.setState({
      selectDateId:id,
      active:true
    });
  }
  _onSelectChannel=(id)=>{
    this.setState({
      selectChannelId:id,
      active:true
    });
  }
  render(){
    const {selectDateId,selectChannelId,active}=this.state;
    let obj={};
    obj.background="#D5EF7F";
    obj.color="#000";
    let style=active?obj:{}
    return <div className="m-search-panel">
        <div className="m-search-panel-date">
           <div className="u-title">DATE</div>
           <div className="u-list">
              <div className={classnames('u-item',{'active':selectDateId==1})} onClick={this._onSelectDate.bind(this,1)}>ANYTIME</div>
              <div className={classnames('u-item',{'active':selectDateId==2})} onClick={this._onSelectDate.bind(this,2)}>TODAY</div>
              <div className={classnames('u-item',{'active':selectDateId==3})} onClick={this._onSelectDate.bind(this,3)}>TOMORROW</div>
           </div>
           <div className="u-list">
             <div className={classnames('u-item',{'active':selectDateId==4})} onClick={this._onSelectDate.bind(this,4)}>THIS WEEK</div>
             <div className={classnames('u-item',{'active':selectDateId==5})} onClick={this._onSelectDate.bind(this,5)}>THIS MONTH</div>
           </div>
           <div className="u-list">
             <div className={classnames('u-item',{'active':selectDateId==6})} onClick={this._onSelectDate.bind(this,6)}>LATER</div>
           </div>
        </div>
        <div className="m-search-panel-channel">
           <div className="u-title">CHANNEL</div>
             <div className="u-list">
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==1})} onClick={this._onSelectChannel.bind(this,1)}>All</div>
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==2})} onClick={this._onSelectChannel.bind(this,2)}>Channel3</div>
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==3})} onClick={this._onSelectChannel.bind(this,3)}>Channel4</div>
             </div>
             <div className="u-list">
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==4})} onClick={this._onSelectChannel.bind(this,4)}>Channel1</div>
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==5})} onClick={this._onSelectChannel.bind(this,5)}>Channel2</div>
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==6})} onClick={this._onSelectChannel.bind(this,6)}>Short</div>
             </div>
             <div className="u-list">
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==7})} onClick={this._onSelectChannel.bind(this,7)}>Short</div>
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==8})} onClick={this._onSelectChannel.bind(this,8)}>Channel3</div>
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==9})} onClick={this._onSelectChannel.bind(this,9)}>Channel4</div>
             </div>
             <div className="u-list">
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==10})} onClick={this._onSelectChannel.bind(this,10)}>Channel5</div>
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==11})} onClick={this._onSelectChannel.bind(this,11)}>Channel Long Name</div>
             </div>
             <div className="u-list">
                <div className="u-item" className={classnames('u-item',{'active':selectChannelId==12})} onClick={this._onSelectChannel.bind(this,12)}>Channel6</div>
             </div>
       </div>
       <div className="u-start" style={style}>
          <div className="u-icon">
            <object  type="image/svg+xml" data={search}>
                search svg
            </object>
          </div>
          <div className="u-text" onClick={this._hideSearchPanel}>
              SEARCH
          </div>

       </div>
    </div>
  }
}
