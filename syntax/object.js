var members = ['egoing','keee','dfaerw'];
var i = 0;
while(i < members.length){
  //console.log(members[i]);
  i = i + 1;
}

var roles = {
  'programmer' : 'egoing',
  'designer' : 'dahee',
  'manager' : 'haeae'
}

console.log(roles.designer);
console.log(roles['designer']);


for(var name in roles){
  console.log('object => ', name, 'value => ', roles[name]);
}
