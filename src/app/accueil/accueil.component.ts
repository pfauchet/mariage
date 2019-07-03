import { Component, OnInit } from '@angular/core';
import M from "materialize-css";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  public ngOnInit()
  {
    console.log("Parallax initialization")
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }


}
