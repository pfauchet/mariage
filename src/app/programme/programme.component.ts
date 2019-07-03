import { Component, OnInit } from '@angular/core';
import M from "materialize-css";

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor() { }

  public ngOnInit()
  {
    console.log("Parallax initialization")
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }
  
  lat_mairie: number = 49.301074;
  lng_mairie: number = -0.0760693;

  lat_reception : number = 49.295789;
  lng_reception: number= 0.0784343;
}
