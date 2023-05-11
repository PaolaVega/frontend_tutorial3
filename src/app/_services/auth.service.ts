import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        correo,
        contrasena,
      },
      httpOptions
    );
  }

  register(username: string, 
    nombre:string, 
    apellido_paterno:string, 
    apellido_materno:string,
    genero:string, 
    correo:string, 
    telefono:string, 
    fecha_nacimiento:string, 
    contrasena:string, 
    ciudad:string, 
    estado:string, 
    codigo_postal:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username, 
        nombre, 
        apellido_paterno, 
        apellido_materno,
        genero, 
        correo, 
        telefono, 
        fecha_nacimiento, 
        contrasena, 
        ciudad, 
        estado, 
        codigo_postal
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
