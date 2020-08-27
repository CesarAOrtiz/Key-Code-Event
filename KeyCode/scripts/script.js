window.onload = () => {
    document.addEventListener('keydown', mostrarCodigo, false);
}

function mostrarCodigo(e) {
    e.preventDefault();
    document.getElementById('keycode').innerHTML = e.keyCode
    document.getElementById('keyname').innerHTML = e.code /*key*/
    document.getElementById('keylocation').innerHTML = keyLocations[e.location]
}

const keyLocations = {
    0: 'General keys',
    1: 'Left-side modifier keys',
    2: 'Right-side modifier keys',
    3: 'Numpad',
};