import { Component, OnInit } from '@angular/core';
import M from "materialize-css";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Collapsible initialization")
    var elems = document.querySelectorAll('.collapsible.expandable');
    M.Collapsible.init(elems, {
      accordion: false
    });
  }

}
