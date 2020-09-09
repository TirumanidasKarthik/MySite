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
