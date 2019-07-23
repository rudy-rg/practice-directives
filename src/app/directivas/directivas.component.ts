import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'BO'
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'BO'
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'USA'
    },
    {
      name: 'Cook  Tyson',
      age: 32,
      country: 'BO'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
