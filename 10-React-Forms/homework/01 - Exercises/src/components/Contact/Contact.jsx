import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  })
  const [errors, setErrors] = React.useState(validate(inputs))

  const handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    setInputs({
      ...inputs,
      [key]: value
    })
    setErrors(
      validate({
         ...inputs,
         [key]: value,
      })
   )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const flag = Object.values(errors).join('').length
    console.log(inputs)
    console.log(errors)
    console.log(flag)
    if (flag) return window.alert('Debe llenar todos los campos')
    window.alert('Datos completos')
    setInputs({
      name: '',
      email: '',
      phone: 0,
      subject: '',
      message: ''
    })
    setErrors({})
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>Nombre:</label>
        <input className={errors.name && 'warning'} type='text' name='name' value={inputs.name} onChange={handleChange} id='' placeholder='Escribe tu nombre...'/>
        <p className='danger'>{errors.name}</p>
        <br/>
        <label>Correo Electrónico:</label>
        <input className={errors.email && 'warning'} type='text' name='email' value={inputs.email} onChange={handleChange} id='' placeholder='Escribe tu email...'/>
        <p className='danger'>{errors.email}</p>
        <br/>
        <label>Teléfono:</label>
        <input className={errors.phone && 'warning'} type='number' name='phone' value={inputs.phone} onChange={handleChange} id='' placeholder='Escribe un teléfono...'/>
        <p className='danger'>{errors.phone}</p>
        <br/>
        <label>Asunto:</label>
        <input className={errors.subject && 'warning'} type='text' name='subject' value={inputs.subject} onChange={handleChange} id='' placeholder='Escribe el asunto...'/>
        <p className='danger'>{errors.subject}</p>
        <br/>
        <label>Mensaje:</label>
        <textarea className={errors.message && 'warning'} type='text' name='message' value={inputs.message} onChange={handleChange} id='' placeholder='Escribe tu mensaje...'/>
        <p className='danger'>{errors.message}</p>
        <br/>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export const validate = (input) => {
  const errors = {}

  if (!input.name) errors.name = 'Se requiere un nombre'
  if (!regexEmail.test(input.email)) errors.email = 'Debe ser un correo electrónico'
  if (input.phone <= 0) errors.phone = 'Sólo números positivos'
  if (!input.subject) errors.subject = 'Se requiere un asunto'
  if (!input.message) errors.message = 'Se requiere un mensaje'
  
  return errors
}