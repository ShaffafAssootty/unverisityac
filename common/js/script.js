  
  // var menuBtn = document.getElementById('menu-btn');
  // var navi = document.getElementById('menu-nav');
  // menuBtn.addEventListener('click', function (e) {
  //   // console.log('clicked');
  // if (navi.classList.contains('active')) {
  //     navi.classList.remove('active');
  //   } else {
  //     navi.classList.add('active');
  //   }
  // });

var menuBtn = document.getElementById('menuBtn');
var nav = document.getElementById('mainNav');
menuBtn.addEventListener('click', function (e) {
if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  } else {
    nav.classList.add('active');
  }
});