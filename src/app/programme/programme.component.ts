import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  lat_mairie: number = 49.301074;
  lng_mairie: number = -0.0760693;

  lat_reception : number = 49.295789;
  lng_reception: number= 0.0784343;
}
