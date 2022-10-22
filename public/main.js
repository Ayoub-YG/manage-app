const menuBtn = document.querySelector('#btn-Menu')
console.log(menuBtn);
const menuMbl = document.querySelector('#menu')
console.log(menuMbl);
menuBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('open')
    menuMbl.classList.toggle('flex')
    menuMbl.classList.toggle('hidden')
})