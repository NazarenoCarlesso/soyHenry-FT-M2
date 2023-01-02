import React from "react"
import { enviarForm } from "../../redux/actions/actions"

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="contactBg">
      <input name="nombre" onChange={handleInput} value={form.nombre}></input>
      <input name="email" onChange={handleInput} value={form.email}></input>
      <input name="asunto" onChange={handleInput} value={form.asunto}></input>
      <input name="mensaje" onChange={handleInput} value={form.mensaje}></input>
      <button onClick={() => enviarForm(form)}>ENVIAR</button>
    </div>
  )
}

export default ContactUs