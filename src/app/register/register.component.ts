import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: any = {
    nombre: null,
    apellido_paterno: null,
    apellido_materno: null,
    genero: null,
    correo: null,
    telefono: null,
    contrasena: null,
    ciudad: null,
    estado: null,
    codigo_postal: null,
    a_nacimiento: null,
    respuesta_seguridad: null,
    placeholder: null
  };

 

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const {nombre, apellido_paterno, apellido_materno, genero, correo, telefono, contrasena, ciudad, estado, codigo_postal,a_nacimiento,respuesta_seguridad,placeholder} = this.form;

    this.authService.register(
        nombre, 
        apellido_paterno, 
        apellido_materno,
        genero, 
        correo, 
        telefono, 
        contrasena, 
        ciudad, 
        estado, 
        codigo_postal,
        a_nacimiento, 
        respuesta_seguridad,
        placeholder).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  
}
