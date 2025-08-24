let userName = Cookies.get('name')
document.getElementById('player_1').innerHTML = userName

document.getElementById('attack').addEventListener('click', function () {
    let attack = getAttack()
    let defence = getDefence()
    let enemyAttack = getRandomZones(1)
    let enemyDefence = getRandomZones(2)
    console.log('игрок атакует: ' + getZoneName(attack) + ' защищает: ' + defence.map(getZoneName))
    console.log('враг атакует: ' + enemyAttack.map(getZoneName) + ' защищает: ' + enemyDefence.map(getZoneName))
})

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function() {
        setTimeout(canYouAttack, 100)
    })
})

function canYouAttack() {
    if (getAttack() == -1 || getDefence() == -1) {
        document.getElementById('attack').disabled = true
    } else {
        document.getElementById('attack').disabled = false
    }
}

function getAttack() {
    let radios = document.querySelector('.attack').querySelectorAll('input[type="radio"]')
    let checked = Array.from(radios).filter(radio => radio.checked)
    if (checked.length != 1) {
        return -1
    }
    return Array.from(radios).indexOf(checked[0])
}

function getDefence() {
    let radios = document.querySelector('.defence').querySelectorAll('input[type="radio"]')
    let checked = Array.from(radios).filter(radio => radio.checked)
    if (checked.length != 2) {
        return -1
    }
    return Array.from(checked).map(radio => Array.from(radios).indexOf(radio)) 
}

/* use switch */
function getZoneName(index) {
    switch(index) {
        case 0: return 'Head';
        case 1: return 'Neck';
        case 2: return 'Body';
        case 3: return 'Belly';
        case 4: return 'Legs';
    }
}

function getRandomZones(count) {
    let result = new Set();
    while(result.size < count) {
        result.add(Math.ceil(Math.random() * 5) - 1);
    }
    return Array.from(result);
}
