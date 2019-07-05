import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livre-dor',
  templateUrl: './livre-dor.component.html',
  styleUrls: ['./livre-dor.component.css']
})
export class LivreDorComponent implements OnInit {
  name: string;
  surname: string;
  comment: string;

  constructor() { }

  ngOnInit() {
  }

  onSendComment(){
    console.log("Sending comment")
  }
}
