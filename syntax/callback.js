// function a(){
//   console.log('A');
// }

//익명 함수
//js 에서는 함수가 값이다
var a = function(){
  console.log('A');
}
//a();

function slowfunc(callback){
  callback();
}

slowfunc(a);
