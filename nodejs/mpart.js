var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}
//M이 가르키는 객체를 모듈 밖에서 사용할 수 있도록 하겠다.
module.exports = M;
