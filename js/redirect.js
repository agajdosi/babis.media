var pathname = window.location.pathname;
var filename = pathname.split('/').pop()
index = parseInt(filename.split('.').shift().toString())-1;

destination = printed[index];
if (destination == "") {
    x = Math.floor(Math.random()*articles.length);
    window.location = articles[x];
} else {
    window.location = printed[index];
}
