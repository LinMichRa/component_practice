import PropTypes from 'prop-types'
import React from 'react'

export default function MyComponent({name,lastName}) {

  const student = {
    name: "Carolina",
    lastName: "Marino",
    mobile: "300000000",
    linkedinProfile:"https://www.linkedin.com/carolina"
  }

  return (
    <div>
      <hr />
      <h4>Este es mi primer componente</h4>
      <p>Curso de React</p>
      <p>Docente: {name} {lastName}</p>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados</li>
        <li>Comunicacion</li>
      </ul>

      <p>Estudiante: {student.name} {student.lastName}</p>
      <ul>
        <li>Móvil: {student.mobile}</li>
        <li>Linkedin: {student.linkedinProfile}</li>
        <li>Estados</li>
        <li>Comunicacion</li>
      </ul>
      <hr />
      <p>Estudiante: {JSON.stringify(student)}</p>
    </div>
  )
}

MyComponent.PropTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string
}

