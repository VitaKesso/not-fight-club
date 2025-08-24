document.getElementById('character').addEventListener('click', function () {
    document.querySelector('.character').classList.add('active')
    document.querySelector('.settings').classList.remove('active')
    document.querySelector('.main').innerHTML = 'Character'

    document.querySelector('.winlose').innerHTML = 'Win: ' + (Cookies.get('win') | 0 ) + " Lose: " + (Cookies.get('lose') | 0 ) 
    document.getElementById('character_name').innerHTML = Cookies.get('name')
})

document.getElementById('home').addEventListener('click', function () {
    document.querySelector('.character').classList.remove('active')
    document.querySelector('.settings').classList.remove('active')
    document.querySelector('.main').innerHTML = 'Battle'
})


document.querySelector('.avatars').querySelectorAll('img').forEach(avatar => {
    avatar.addEventListener('click', function () {
        document.getElementById('scott').src = avatar.src
        document.getElementById('heroes').src = avatar.src
    })
})