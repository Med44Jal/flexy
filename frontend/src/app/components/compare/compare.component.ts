import { Component, OnInit, ViewChild } from '@angular/core';
import cars from '../../../assets/data/cars.json';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ChartComponent,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers
} from "ng-apexcharts";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})

export class CompareComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  cars: any = cars;
  items = [];
  res = [];
  quick=[];
  reference_rate_litre = 8.0;
  reference_rate_gear = 10;
  reference_rate_horse = 986;
  reference_rate_cylindre = 16;
  cons = [];

  private options: string[] = [];
  public control = new FormControl();
  public filteredOptions: string[];
  public height: string;

  ngOnInit() {
    // Seed data

    this.cars.forEach(c => this.options.push(c['Represented Test Veh Model'] + " " + c['Test Veh Displacement (L)'] + "L " + c['Rated Horsepower'] + "HP " + c['Model Year']))
    //console.log(this.options)
    // Listen for changes to the input
    this.listenForChanges();
  }

  listenForChanges(){
    this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          // Filter the options
          this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(value?.toLowerCase()));

          // Recompute how big the viewport should be.
          if (this.filteredOptions.length < 4) {
            this.height = (this.filteredOptions.length * 50) + 'px';
          } else {
            this.height = '200px'
          }
        })
      ).subscribe();
  }

  appendItem(item: string){
    this.items.push(item);
    this.control.reset();
    this.listenForChanges();
  }

  popItem(item: string){
    this.items.forEach((element,index)=>{
        if(element===item) this.items.splice(index,1);
     });
    this.res = [];
  }

  findRivals(rival){
    this.cars.forEach((c) => {
      let i;
      let r = c['Represented Test Veh Model'] + " " + c['Test Veh Displacement (L)'] + "L " + c['Rated Horsepower'] + "HP " + c['Model Year'];
      for(i=0 ;i<2 ; i++)
      {
        if(this.res.find(d => d['Represented Test Veh Model'] + " " + d['Test Veh Displacement (L)'] + "L " + d['Rated Horsepower'] + "HP " + d['Model Year'] === r)){
          console.log('here')
        }
        else{
        if(r === rival[i]){
         this.res.push(c);
        }
      }
      }
    });
    if(this.res[0]['Test Veh Displacement (L)'] >= this.res[1]['Test Veh Displacement (L)']){
        this.cons.push(true);
    }
    else{
      this.cons.push(false);
    }
     if(this.res[0]['Rated Horsepower']>= this.res[1]['Rated Horsepower']){
      this.cons.push(true);
    }else{
      this.cons.push(false);
    }
     
    if(this.res[0]['# of Cylinders and Rotors']>= this.res[1]['# of Cylinders and Rotors']){
      this.cons.push(true);
    }else{
      this.cons.push(false);
    }
    
    if(this.res[0]['# of Gears']>= this.res[1]['# of Gears']){
      this.cons.push(true);
    }else{
      this.cons.push(false);
    }
    

  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [50,40,80,90, 50, 80]
          //data: [this.quick[0]['gears'], this.quick[0]['cylinders'], this.quick[0]['horse'], this.quick[0]['litre'], 50, 80]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },
      title: {
        text: ""
      },
      colors: ["#FF4560"],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColors: ["#FF4560"],
        strokeWidth: 2
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: [
          "Design",
          "Confort",
          "KM",
          "Consommation L/100km",
          "Options",
          "Puissance"
        ]
      },
      yaxis: {
        tickAmount: 6,
        labels: {
          formatter: function(val, i) {
              return "";
          }
        }
      }
    };
  }
  

}
