document.getElementById('fight').addEventListener('click', function() {
   document.querySelector('.first').classList.remove('active')
   document.querySelector('.main').innerHTML = 'Battle'
})