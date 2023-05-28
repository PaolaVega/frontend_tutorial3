import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, ChartOptions, ChartDataset } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from 'src/app/_services/data-client.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        min: 0,
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        display: true,
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Tú', backgroundColor: '#a4cda4'},
      { data: [ 72.9, 14.6, 63.9, 22.7, 95.1, 35.45, 126.1 ], label: 'Población', backgroundColor: '#5da337'}
    ],
  };

  constructor(private dashboardService: DashboardService, private storageService: StorageService) {}

  ngOnInit() {
    this.loadData();
  }

  id_cliente!: number;

  private loadData() {
    this.id_cliente = this.storageService.getUser().id;
    this.dashboardService.getChartData(this.id_cliente).subscribe(data => {
      
      
      /*
      //console.log(data[0]);
      var data_chart =[data[0].frecuencia_respiratoria,      
                        data[0].indice_masa_corpora,                        
                        data[0].peso,                       
                        data[0].presion_sanguinea_sistolica,
                        data[0].ritmo_cardiaco,                        
                        data[0].saturacion_oxigeno,
                        data[0].temperatura,              
      ];
      console.log('DATA CHART', data_chart);
      */
      
      this.barChartData.datasets[0].data = data[0];
      this.chart?.update();
    });
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}

