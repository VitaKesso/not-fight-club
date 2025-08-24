document.getElementById('settings').addEventListener('click', function () {
    document.querySelector('.character').classList.remove('active')
    document.querySelector('.settings').classList.add('active')
    document.querySelector('.main').innerHTML = 'Settings'

    document.querySelector('.settings').querySelector('input').value = Cookies.get('name')
})

document.getElementById('edit').addEventListener('click', function() {
    let name = document.querySelector('.settings').querySelector('input').value
    Cookies.set('name', name)
    document.getElementById('player_1').innerHTML = name
})
