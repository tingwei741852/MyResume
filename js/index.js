// 切換LEATHER專案
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("coll-slider");
  var y = document.getElementsByClassName("cw-change");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
   if (n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = y.length}
  for (i = 0; i < y.length; i++) {
     y[i].style.display = "none";  
  }
  y[slideIndex-1].style.display = "block";  
  
}
// 切換CYGC專案
var slideIndex1 = 1;
showDivs1(slideIndex);

function plusDivsf2(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("coll-sliderf2");
  var y = document.getElementsByClassName("cw-changef2");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "block";  
   if (n > y.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = y.length}
  for (i = 0; i < y.length; i++) {
     y[i].style.display = "none";  
  }
  y[slideIndex1-1].style.display = "block";  
  
}
// 切換前端專案
function changefro(n) {
  var i;
  var x = document.getElementsByClassName("cwf-pro");
  
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[n].style.display = "block";   
  
}

// 切換CLOUDY專案
var slideIndexb1 = 1;
showDivsb1(slideIndexb1);

function plusDivsb1(n) {
  showDivsb1(slideIndexb1 += n);
}

function showDivsb1(n) {
  var i;
  var x = document.getElementsByClassName("coll-sliderb1");
  var y = document.getElementsByClassName("cw-changeb1");
  if (n > x.length) {slideIndexb1 = 1}
  if (n < 1) {slideIndexb1 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndexb1-1].style.display = "block";  
   if (n > y.length) {slideIndexb1 = 1}
  if (n < 1) {slideIndexb1 = y.length}
  for (i = 0; i < y.length; i++) {
     y[i].style.display = "none";  
  }
  y[slideIndexb1-1].style.display = "block";  
  
}
function changefro(n) {
  var i;
  var x = document.getElementsByClassName("cwf-pro");
  var o=document.getElementsByClassName("cwf-option");
  
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none"; 
    o[i].style.backgroundColor="#ACBD86";
  }
  x[n].style.display = "block";
  o[n].style.backgroundColor="#D95858";
  
}
//切換前後端
function changeworks(n) {
  
  var s;
  var g = document.getElementsByClassName("cw-front");
  var o=document.getElementsByClassName("coll-option");
      

  
  for (s = 0; s < g.length; s++) {
     g[s].style.display = "none";
     o[s].style.backgroundColor="#fff";
    o[s].style.color="#000";
  }
  g[n].style.display = "block";   
  o[n].style.backgroundColor="#ACBD86";
  o[n].style.color="#fff";
  
}