document.getElementById('create').addEventListener('click', function() {
    document.querySelector('.registration').classList.remove('active')
    Cookies.set('name', document.getElementById('name').value)
    document.getElementById('player_1').innerHTML = document.getElementById('name').value
})

