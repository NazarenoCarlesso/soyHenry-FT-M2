const enviarForm = (formulario) => {
    return {
        type: 'FORM_DATA',
        payload: formulario
    }
}

export { enviarForm }