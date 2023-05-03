import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/data-client.service';

@Component({
  selector: 'app-vital1',
  templateUrl: './vital1.component.html',
  styleUrls: ['./vital1.component.css']
})

export class Vital1Component implements OnInit {

  Id_cliente = 6; // Cambia esto por el ID del usuario que deseas mostrar
  userRitmo: number | undefined;
  userFrecuencia: number | undefined;
  userPeso: number | undefined;
  userAltura: number | undefined;
  userBMI: number | undefined;
  userSaturacion: number | undefined;
  userTemperatura: number | undefined;
  userPresion: number | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(this.Id_cliente).subscribe(user => {
      this.userRitmo = user.ritmo_cardiaco;
      this.userFrecuencia = user.frecuencia_respiratoria;
      this.userPeso = user.peso;
      this.userAltura = user.altura;
      this.userBMI = user.indice_masa_corporal;
      this.userSaturacion = user.saturacion_oxigeno;
      this.userTemperatura = user.temperatura;
      this.userPresion = user.presion_sanguinea_sistolica;
    });
  }
}