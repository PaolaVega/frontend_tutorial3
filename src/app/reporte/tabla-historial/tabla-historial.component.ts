import { Component, OnInit } from '@angular/core'; 
import { Medicion } from 'src/app/interfaces/medicion';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css']
})
export class TablaHistorialComponent implements OnInit{
  listProducts: Medicion[] = [
    {Ritmo: 1, Frec: 2, Peso: 3, Altura: 4, BMI: 6, Saturacion: 7, Temp:8, Presion:9},
    {Ritmo: 11, Frec: 12, Peso: 13, Altura: 14, BMI: 16, Saturacion: 17, Temp:18, Presion:19},
  ]
  

  constructor() { }

  ngOnInit(): void {
  }
}
