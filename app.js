let pswrd = document.querySelector('#myPassword');
let show = document.querySelector('.show');
show.onclick = function () {
  if (pswrd.type === 'password') {
    pswrd.setAttribute('type', 'text');
    show.classList.add('hide');
  } else {
    pswrd.setAttribute('type', 'password');
  }
};
