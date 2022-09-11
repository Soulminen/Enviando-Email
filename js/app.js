// Variables
const btnEnviar = document.querySelector('#enviar');


// Variable para campos


eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}



// Funciones

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')

}