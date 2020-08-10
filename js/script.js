var open = document.getElementById('open');
var close = document.getElementById('close');
var sidebar = document.getElementById('sidebar');

open.addEventListener('click', function () {
    sidebar.style.marginLeft = "0";
});

close.addEventListener('click', function () {
    sidebar.style.marginLeft = "-1000px";
});