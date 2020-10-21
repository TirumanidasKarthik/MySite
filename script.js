

function projects(){
  window.open("https://github.com/TirumanidasKarthik?tab=repositories");
}
function about(){
  let s = document.querySelector("#About");
  let l = s.style.display;
  if(l == "" || l == "none"){
    document.getElementById("About").style.display = "block";
  }
  if(l == "block"){
    document.getElementById("About").style.display = "none";
  }

}
function drawing(){
  window.open("drawings.html", "_self");
}
function home(){
  window.open("index.html", "_self");
}
var index = 1;
function increment(){
  index++;
  nextpage(index);
}
function decrement(){
  index--;
  prepage(index);
}
function nextpage(currval){
  if(currval == 2){
    document.getElementById("prebt").style.display = "";
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "contents";

  }
  if(currval == 3){
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "contents";
  }
  if(currval == 4){
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "contents";
    document.getElementById("nexbt").style.display = "none";
  }

}
function prepage(currval){
  if(currval == 1){
    document.getElementById("prebt").style.display = "none";
    document.getElementById("nexbt").style.display = "";
    document.getElementById("first").style.display = "contents";
    document.getElementById("second").style.display = "none";

  }
  if(currval == 2){
    document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "contents";

  }
  if(currval == 3){
    document.getElementById("fourth").style.display = "none";
    document.getElementById("third").style.display = "contents";
    document.getElementById("nexbt").style.display = "";

  }

}
