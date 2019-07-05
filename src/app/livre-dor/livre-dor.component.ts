import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../service/commentaire.service'

@Component({
  selector: 'app-livre-dor',
  templateUrl: './livre-dor.component.html',
  styleUrls: ['./livre-dor.component.css']
})
export class LivreDorComponent implements OnInit {
  name: string;
  surname: string;
  comment: string;

  displaySuccessMessage: boolean = false;
  displayErrorMessage: boolean = false;

  constructor(private commentaireService: CommentaireService) { }

  ngOnInit() {
  }

  onSendComment(){
    console.log("Sending comment");
    this.displayErrorMessage = false;
    this.displaySuccessMessage = false;

    this.commentaireService.createComment(this.name, this.surname, this.comment, (data: any) => {
      console.log(data);
      if (data.errorMessage){
        this.displayErrorMessage = true;
      } else {
        this.displaySuccessMessage = true;
        this.comment="";
        this.surname="";
        this.name="";
      }
    });
  }
}
