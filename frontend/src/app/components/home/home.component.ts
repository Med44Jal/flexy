import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import cars from '../../../assets/data/vehicule.json';
import villes from '../../../assets/data/ville.json';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  data;
  p;
  brand;
  years=["1980 ou plus ancien","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];
  miles=["0 - 4 999","5 000 - 9 999","10 000 - 14 999","15 000 - 19 999","20 000 - 24 999","25 000 - 29 999","30 000 - 34 999","35 000 - 39 999","40 000 - 44 999","45 000 - 49 999","50 000 - 54 999","55 000 - 59 999","60 000 - 64 999","65 000 - 69 999","70 000 - 74 999","75 000 - 79 999","80 000 - 84 999","85 000 - 89 999","90 000 - 94 999","95 000 - 99 999","100 000 - 109 999","110 000 - 119 999","120 000 - 129 999","130 000 - 139 999","140 000 - 149 999","150 000 - 159 999","160 000 - 169 999","170 000 - 179 999","180 000 - 189 999","190 000 - 199 999","200 000 - 249 999","250 000 - 299 999","300 000 - 349 999","350 000 - 399 999","400 000 - 449 999","450 000 - 499 999","Plus de 500 000"];
  fuels=["Diesel","Essence","Electrique","Hybride","LPG"];
  cvs=["4 CV","5 CV","6 CV","7 CV","8 CV","9 CV","10 CV","11 CV","12 CV","13 CV","14 CV","15 CV","16 CV","17 CV","18 CV","19 CV","20 CV","21 CV","22 CV","23 CV","24 CV","25 CV","26 CV","27 CV","28 CV","29 CV","30 CV","31 CV","32 CV","33 CV","34 CV","35 CV","36 CV","37 CV","38 CV","39 CV","40 CV","41 CV","Plus de 41 CV"];
  gearbox=["Automatique","Manuelle"];
  origins=["Dédouanée","Importée neuve","Pas encore dédouanée","WW au Maroc"];
  states=["Excellent","Très bon","Bon","Correct","Endommagé","Pour Pièces"];
  cars = cars;
  villes = villes;

  model;
  gear;
  fuel;
  cv;
  ville;

  minPrice: number = 100000;
  maxPrice: number = 200000;
  optionsPrice: Options = {
    floor: 10000,
    ceil: 1000000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>' + value + ' Dhs</b>';
        case LabelType.High:
          return '<b>' + value + ' Dhs</b>';
        default:
          return "" + value;
      }
    }
  };

  minKm: number = 5000;
  maxKm: number = 150000;
  optionsKm: Options = {
    floor: 0,
    ceil: 400000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>" + value + " KM</b>";
        case LabelType.High:
          return "<b>" + value + " KM</b>";
        default:
          return "" + value;
      }
    }
  };

  minYear: number = 2000;
  maxYear: number = 2018;
  optionsYear: Options = {
    floor: 1961,
    ceil: 2022,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>" + value + "</b>";
        case LabelType.High:
          return "<b>" + value + "</b>";
        default:
          return "" + value;
      }
    }
  };


  constructor(config: NgbCarouselConfig,private http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.animation = true;
  }

  ngOnInit(): void {
    this.getData();
  }

  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (data) => {
        this.data = data;
      }
    );;
  }

  get secondSelectOptions() {
    return (this.cars.find(({brand}) => brand === this.brand))?.models;
  }
}
