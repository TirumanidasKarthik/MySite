function res(){
    window.open("Resume333.docx");
}
function namef(){
  var x = document.getElementById("u_name").value;
  var rem = document.getElementById("u_name");
  var butt = document.getElementById("butt");
  rem.remove();
  butt.remove();
  document.getElementById("par").innerHTML = "Thankyou for visiting "+ x;

}
