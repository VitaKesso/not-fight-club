document.getElementById('attack').addEventListener('click', function () {
    console.log('игрок атакует: ' + getAttack() + ' защищает: ' + getDefence())
    
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

