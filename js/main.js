const share = document.getElementById('share');
const redes = document.getElementById('redes');
const flecha = document.getElementsByClassName('flecha')[0];
const lugarflecha = document.getElementById('flechahere')
const img_flecha = document.getElementById('share_img')

share.addEventListener('click', editamos)
function editamos() {
    redes.style.display = 'flex'
    share.classList.add('cambioColor')
    flecha.style.display = 'flex'
    lugarflecha.classList.add('flecha')

    //cambio de color flecha
    img_flecha.classList.add('anegro','ablanco')
}