var http = require('http');
var fs = require('fs'); //file system
var url = require('url');

function template(title, list, body){
  return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      <a href="/create">create</a>
      ${body}
    </body>
    </html>
    `;
}

function createlist(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</li>`
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}

var app = http.createServer(function(request,response){

  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir('./data',function(error, filelist){
      //  console.log(filelist);
        var title = 'Welcome';
        var description = 'hello, Node.js';
        var list = createlist(filelist);
        var templ = template(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(templ);
      })
    } else { //queryData.id exist
        fs.readdir('./data',function(error, filelist){
            //  console.log(filelist);
            var title = 'Welcome';
            var description = 'hello, Node.js';
            var list = createlist(filelist);

            fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){
              var title = queryData.id;
              var templ = template(title, list, `<h2>${title}</h2>${description}`);
              response.writeHead(200);
              response.end(templ);
            }); //fs.readfile end

          }); //fs.readdir end
    }
  } else { //pathname != '/'
      response.writeHead(404);
      response.end('Not found');
  }
//    console.log(url.parse(_url, true));
});
app.listen(3000); //포트번호?
