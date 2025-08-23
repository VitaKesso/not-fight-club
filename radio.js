document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        console.log(radio.checked)
        if (radio.checked) {
            radio.addEventListener('click', function() {
                radio.checked = false;
            }, {
                once: true
            })
        }
    })
})