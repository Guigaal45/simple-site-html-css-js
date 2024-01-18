'use strict'

const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var className = docuent.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContet = "Light";
    }
    console.log('current class name: ' + className);
});
