document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked=false
    radio.addEventListener('change', function() {
        if (radio.checked) {
            radio.addEventListener('click', function() {
                radio.checked = false;
            }, {
                once: true
            })
        }
    })
})