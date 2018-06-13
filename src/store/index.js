import {observable,action} from 'mobx';
export default class Store{
  @observable username="yuxiaoliang";  //登陆用户的名称
  @observable password="123456";//登陆用户的密码
  @observable token="";//登陆用户返回的token
  @observable startTime="";//搜索开始的时间;
  @observable endTime=""//搜索结束的时间
  @observable resultNum="0";//活动event的数目
  @observable eventsList=[];//活动的列表
  @observable isShowResult=false;//是否需要搜索结果面板
  //更新用户名称
  @action updateUsername(name){
    this.username=name;
  };
  //更新用户密码
  @action updatePassword(password){
    this.password=password;
  }
  //更新token
  @action updateToken(token){
    this.token=token;
  }
  //更新活动event的数目
  @action updateEventNum(num){
    this.resultNum=num;
  }
  //更新events列表
  @action updateEventList(list){
    this.eventsList=[].concat(list);
  }
}
