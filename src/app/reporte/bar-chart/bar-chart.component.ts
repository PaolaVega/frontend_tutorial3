import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, ChartOptions, ChartDataset } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
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
        min: 10,
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
      { data: [], label: 'Tú', backgroundColor: '#3CF17E' },
      { data: [ 72.9, 14.6, 63.9, 22.7, 95.1, 35.45, 126.1, 169.9], label: 'Población'}
    ],
  };

  constructor(private dashboardService: DashboardService, private storageService: StorageService) {}

  ngOnInit() {
    this.loadData();
  }

  id_cliente!: number;

  private loadData() {
    this.id_cliente = this.storageService.getUser().id;
    this.dashboardService.getDashboard(this.id_cliente).subscribe(data => {
      this.barChartData.datasets[0].data = data;
      console.log(data);
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


/*
export class BarChartComponent implements OnInit {

  // variables para la configuración de la gráfica
  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {}
  };

  public barChartLabels: BaseChartDirective["labels"] = ['1', '2', '3', '4', '5', '6', '7', '8']; // etiquetas de la gráfica
  public barChartType: ChartType = 'bar'; // tipo de gráfica
  public barChartLegend = true; // leyenda
  public barChartData: ChartDataset[] = []; // datos de la gráfica

  idCategoria = 7;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Obtener datos del servicio
    this.userService.getUserFiles(this.idCategoria).subscribe(data => {
      // Datos estáticos
      this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8'];
      this.barChartData = [
        { data: [10, 20, 30, 40, 50, 60, 70, 80], label: 'Población' }
      ];
      // Datos dinámicos
      this.barChartLabels = data.labels;
      this.barChartData = data.chartData;
    });
  }
}
*/
