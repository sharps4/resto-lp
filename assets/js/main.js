let btp = document.getElementById("btp");

window.onscroll = function() {scrollFunction()()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ) {
    btp.style.display = "block";
  } else {
    btp.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}