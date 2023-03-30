import React,{useState} from 'react';
import '@styles/Contacto.scss';
import { MdEmail,MdPhone,MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacto = () =>{
  const mostrarAlerta=()=>{
    toast.success('Se Envio el correo de forma exitosa!', {
    className: 'toast-message'
  });
  }
    return(
      <div className="content">
  <h1 className="logo">Contáctenos</h1>
 
  <div className="contact-wrapper animated bounceInUp">
    <div className="contact-form">
      <h3>Contacta con nosotros</h3>
      <form >
        <p>
          <label>Nombre Completo</label>
          <input type="text" name=""  className='inputs'/>
        </p>
        <p>
          <label>Direccion de correo</label>
          <input type="email" name="" className='inputs'/>
        </p>
        <p>
          <label>Numero de Telefono</label>
          <input type="tel" name="" className='inputs'/>
        </p>
        <p className="block">
          <label>Mensaje</label> 
          <textarea name="" rows={3} defaultValue={""} />
        </p>
        <input
            type='button'
            className='boton-contacto'
            defaultValue='Enviar'
            onClick={mostrarAlerta}
          />
      </form>
    </div>
    <div className="contact-info">
      <h4>Mas Información</h4>
      <ul>
        <li><MdLocationOn />  Residencia Smith</li>
        <li><MdPhone /> (456) 961 541 081</li>
        <li><MdEmail /> Rick and Morty@website.com</li>
      </ul>
      <p>Si quieres saber un poco mas sobre nosotros, contactanos por los siguientes medios. Si no en la aparte de abajo llena los datos y escribe la información que necesites y te la mandaremos.</p>
      <p>Company.com</p>
    </div>
  </div>
  
  {<ToastContainer />}
</div>
    )
}
export default Contacto;