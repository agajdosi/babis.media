var pathname = window.location.pathname;
var filename = pathname.split('/').pop()
index = parseInt(filename.split('.').shift().toString())-1;

window.location = printed[index];
