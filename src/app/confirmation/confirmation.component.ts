import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from '../service/confirmation.service'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.decision = "0";
    this.displaySuccessMessage = false;
    this.displayErrorMessage = false;
  }

  displaySuccessMessage: boolean = false;
  displayErrorMessage: boolean = false;
  errorMessage: string;

  surname: string;
  name; string;
  code: string;
  decision: string;

  onConfirm() {
    console.log("Confirmation en cours");
    this.displayErrorMessage = false;
    this.displaySuccessMessage = false;

    if (!this.code || !this.surname || !this.name || this.decision == "0") {
      this.errorMessage = "Merci de compléter tous les champs";
      this.displayErrorMessage = true;
    }
    else {
      let attends = (this.decision == "1");

      this.confirmationService.confirmReservation(this.name, this.surname, this.code, attends, 1, (err, data) => {
        if (err) {
          console.log("Erreur lors de la confirmation", err);
          this.displayErrorMessage = true;
          this.errorMessage = "Oops, une erreur est survenue lors de la confirmation de ta venue ...";
        }
        else {
          console.log("Confirmation réussie", data);
          this.displaySuccessMessage = true;
          this.name = null;
          this.surname = null;
          this.code = null;
          this.decision = "0";
        }

      })
    }
  }

}
