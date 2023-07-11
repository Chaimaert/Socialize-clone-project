
var settingsmenu = document.querySelector(".user-menu");
var darkbtn = document.getElementById('dark-btn');



function settingsMenuToggle(){
    settingsmenu.classList.toggle("user-menu-height");
}

darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");

}