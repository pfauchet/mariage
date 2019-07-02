import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.decision="0";
    this.displaySecondForm = false;
    this.displayFirstForm = true;
  }
  displaySecondForm: boolean;
  displayFirstForm: boolean;
  surname: string;
  name; string;
  code: string;
  decision: string;
  
  onConfirm(){
    console.log("Confirmation en cours")
    // this.displaySecondForm=true;
    // this.displayFirstForm=false;
  }

}
