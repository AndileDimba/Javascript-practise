const hamburgerBtn =  document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

let count = 0 

function toggleButton() {
    navList.classList.toggle('show')
    count++
    if (count > 5) {
       hambugerBtn = removeEventListener('click', toggleButton, false);
    }
}

hamburgerBtn = addEventListener('click', toggleButton)


function entered() {
    document.getElementById("form").innerHTML = 'Thank you for contacting us....';
} 