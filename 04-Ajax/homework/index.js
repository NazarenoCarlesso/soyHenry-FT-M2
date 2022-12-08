const boton = document.getElementById('boton');
const lista = document.getElementById('lista');
boton.addEventListener('click', async () => {
    $(lista).empty(); // borra la lista de amigos antigua
    console.log('Ver Amigos');
    const amigos = await fetch('http://localhost:5000/amigos').then(data => data.json());
    console.log(amigos);
    amigos.forEach(amigo => {
        const { name, age, email } = amigo;
        const li = document.createElement('li');
        li.innerText = `${name}, ${age}, ${email}`;
        console.log(li);
        lista.appendChild(li);
    });
});

const input = document.getElementById('input');
const buscar = document.getElementById('search');
const resultado = document.getElementById('amigo');

buscar.addEventListener('click', async () => {
    console.log('Buscar');
    const id = input.value;
    console.log(`id: ${id}`);
    input.value = ''; // borrar input;
    if (!id) return; // si no hay id
    const amigo = await fetch('http://localhost:5000/amigos/' + id)
        .then(data => data.json())
        .catch((e) => {
            console.log(e);
            resultado.innerText = 'No se encontró ningún amigo';
        });
    console.log(amigo);
    if (!amigo) return; // si no hay amigo
    const { name, age, email } = amigo;
    resultado.innerText = `${name}, ${age}, ${email}`;
});

const inputDelete = document.getElementById('inputDelete');
const borrar = document.getElementById('delete');
const borrado = document.getElementById('success');

borrar.addEventListener('click', async () => {
    console.log('Borrar');
    const id = inputDelete.value;
    console.log(`id: ${id}`);
    inputDelete.value = ''; // borrar input;
    if (!id) return;
    await fetch('http://localhost:5000/amigos/' + id, { method: 'DELETE' });
    borrado.innerText = 'Tu amigo fue borrado con éxito';
});