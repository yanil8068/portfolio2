var menubtn = document.getElementById("menubtn");
var navigation = document.getElementById("navigation");
var menu = document.getElementById("menu");

//   very important javascript
navigation.style.right = "-200px";
menubtn.onclick = function () {
  if (navigation.style.right == "-200px") {
    navigation.style.right = "0px";
    menu.src = "images/close.png";
  } else {
    navigation.style.right = "-200px";
    menu.src = "images/menu.png";
  }
};



