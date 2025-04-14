const boutons = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutons.length; i++){
    boutons[i].addEventListener("click", openModale);
}

function openModale(){
    modale.classList.add('visible');
    modale.addEventListener("click", closeModale);
}

function closeModale(){
    modale.classList.remove('visible');
}