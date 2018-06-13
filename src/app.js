import {observable,computed,autorun} from 'mobx';
var numbers=observable([1,2,3]);
var sum=computed(()=>numbers.reduce((a,b)=>a+b,0));
var disposer=autorun(()=>console.log(sum.get()));
numbers.push(4);
