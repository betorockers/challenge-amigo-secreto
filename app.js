// Definimos el array donde almacenaremos los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturamos el valor ingresado por el usuario en campo de texto
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim();  // utilizamos trim() para elimina espacios al principio y final del valor ingresado

    // Validamos que el campo no esté vacío
    if (nombreAmigo === "") {
        // mostramos el siguiente mensaje de alerta si el campo esta vacio
        alert("Por favor, inserte un nombre.");
    } else {
        // Si el usuario ingresa un nombre válido, lo agregamos al array de amigos
        amigos.push(nombreAmigo);

        // Limpiamos el textarea luego de agregar el nombre de un amigo
        amigoInput.value = '';

        // Actualizamos la lista de amigos
        actualizarListaAmigos();
    }
}

// Función para actualizar la lista de amigos y mostrarla en el front
function actualizarListaAmigos() {
    // Seleccionamos el elemento de la lista donde se mostrarán los amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiamos la lista antes de volver a actualizarla
    listaAmigos.innerHTML = '';

    // Recorremos el array de amigos y agregamos cada uno como un <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;  // Asignamos el nombre del amigo al <li>
        listaAmigos.appendChild(li);  // Añadimos el <li> a la lista
    });
}
