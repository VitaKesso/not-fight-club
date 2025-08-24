let userName = Cookies.get('name')
let enemyName = 'Your Nightmare'
document.getElementById('player_1').innerHTML = userName

let enemyMaxHp = 150;
let enemyHp = 150;
let heroHp = 150;
let heroMaxHp = 150;
let enemyDamage = 30;
let heroDamage = 30;

calculateProgress()

document.getElementById('attack').addEventListener('click', function () {
    let attack = getAttack()
    let defence = getDefence()
    let enemyAttack = getRandomZones(1)
    let enemyDefence = getRandomZones(2)
    console.log('игрок атакует: ' + getZoneName(attack) + ' защищает: ' + defence.map(getZoneName))
    console.log('враг атакует: ' + enemyAttack.map(getZoneName) + ' защищает: ' + enemyDefence.map(getZoneName))

    if (enemyDefence.indexOf(attack) == -1) {
        enemyHp = Math.max(enemyHp - heroDamage, 0);
        addLog(heroName() + ' попал ' + villainName() + ' в ' + getZoneName(attack) + ' и нанёс ' + damage(heroDamage) + ' урона')
    } else {
        addLog(villainName() + ' защитился от атаки ' + heroName() + ' в ' + getZoneName(attack) + ' урона нет')
    }

    enemyAttack.forEach(kick => {
        if (defence.indexOf(kick) == -1) {
            heroHp = Math.max(heroHp - enemyDamage, 0);
            addLog(villainName() + ' попал ' + heroName() + ' в ' + getZoneName(kick) + ' и нанёс ' + damage(enemyDamage) + ' урона')
        } else {
            addLog(heroName() + ' защитился от атаки ' + villainName() + ' в ' + getZoneName(kick) + ' урона нет')
        }
    })

    calculateProgress()
})

function calculateProgress() {
    document.getElementById('progress').style.width = heroHp / heroMaxHp * 100 + '%'
    document.getElementById('progress_enemy').style.width = enemyHp / enemyMaxHp * 100 + '%'
    document.getElementById('hp_label').innerHTML = heroHp + ' / ' + heroMaxHp
    document.getElementById('hp_label_enemy').innerHTML = enemyHp + ' / ' + enemyMaxHp
}

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function () {
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
    let zone;
    switch (index) {
        case 0:
            zone = 'Head';
            break;
        case 1:
            zone = 'Neck';
            break;
        case 2:
            zone = 'Body';
            break;
        case 3:
            zone = 'Belly';
            break;
        case 4:
            zone = 'Legs';
            break;
    }
    return '<span class="zone">' + zone + '</span>'
}

function getRandomZones(count) {
    let result = new Set();
    while (result.size < count) {
        result.add(Math.ceil(Math.random() * 5) - 1);
    }
    return Array.from(result);
}

function addLog(message) {
    let log = document.getElementById('log')
    let line = document.createElement('div')
    line.innerHTML = message;
    log.appendChild(line)
    log.scrollTop = log.scrollHeight;
}


function heroName() {
    return '<span class="hero_name">' + Cookies.get('name') + '</span>'
}

function villainName() {
    return '<span class="enemy_name">' + enemyName + '</span>'
}

function damage(amount) {
     return '<span class="damage">' + amount + '</span>'
}