import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../_services/data-client.service';

@Component({
  selector: 'app-vital1',
  templateUrl: './vital1.component.html',
  styleUrls: ['./vital1.component.css']
})

export class Vital1Component implements OnInit {
  Id_cliente =  7; // Cambia esto por el ID del usuario que deseas mostrar
  userRitmo!: number;
  userFrecuencia!: number;
  userPeso!: number;
  userAltura!: number;
  userBMI!: number;
  userSaturacion!: number;
  userTemperatura!: number;
  userPresion!: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDashboard(this.Id_cliente).subscribe(user => {
      console.log("Just confirming I'm actually getting here", user)
      this.userRitmo = user[1].ritmo_cardiaco;
      this.userFrecuencia = user[1].frecuencia_respiratoria;
      this.userPeso = user[1].peso;
      this.userAltura = user[1].altura;
      this.userBMI = user[1].indice_masa_corporal;
      this.userSaturacion = user[1].saturacion_oxigeno;
      this.userTemperatura = user[1].temperatura;
      this.userPresion = user[1].presion_sanguinea_sistolica;
    });
  }
}
