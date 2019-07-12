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
  errorMessage: string;

  constructor(private commentaireService: CommentaireService) { }

  ngOnInit() {
  }

  onSendComment() {
    console.log("Sending comment");
    this.displayErrorMessage = false;
    this.displaySuccessMessage = false;

    if (!this.name || !this.surname || !this.comment) {
      this.errorMessage = "Merci de compléter tous les champs";
      this.displayErrorMessage = true;
    }
    else {
      this.commentaireService.createComment(this.name, this.surname, this.comment, (err, data) => {
        if (err || data.errorMessage) {
          this.displayErrorMessage = true;
          this.errorMessage = "Oops, une erreur est survenue lors de l'envoi de ton commentaire ...";
        }
        else {
          console.log(data);
          this.displaySuccessMessage = true;
          this.comment = "";
          this.surname = "";
          this.name = "";
        }
      });
    }

  }
}
