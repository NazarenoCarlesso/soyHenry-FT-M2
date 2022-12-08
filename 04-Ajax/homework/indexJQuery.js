$('#boton').click( async () => {
    $(lista).empty(); // borra la lista de amigos antigua
    const amigos = await $.get('http://localhost:5000/amigos');
    amigos.forEach(amigo => {
        $('#lista').append(`<li>${amigo.name}</li>`);
    });
});

$('#search').click( async () => {
    const id = $('#input').val();
    $('#input').val('');
    if (!id) return;
    const amigo = await $.get('http://localhost:5000/amigos/' + id);
    $('#amigo').text(`${amigo.name}`);
});

$('#delete').click( async () => {
    const id = $('#inputDelete').val();
    $('#inputDelete').val('');
    if (!id) return;
    $.ajax({
        url: 'http://localhost:5000/amigos/' + id,
        type: 'DELETE',
        success: () => {
            $('#success').text('Tu amigo fue borrado con éxito');
        }
    });
});
