//--------------- Sidebar events ---------------------------------
let close = document.getElementById('close');

close.onclick = function() {
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('main').style.marginLeft = "20px"
}