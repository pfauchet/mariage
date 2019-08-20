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
    this.displayErrorMessage = false;
    this.displaySecondForm = false;
  }

  displaySecondForm: boolean = false;
  displayErrorMessage: boolean = false;
  errorMessage: string;
  successMessage: string = null;

  surname: string;
  name: string;
  attendantData;

  isAttending: boolean = true;
  isWithPlusOne: boolean = false;
  isWithChildren: boolean = false;

  onSearchAttendant() {
    console.log("Searching attendant");
    this.displayErrorMessage = false;
    this.displaySecondForm = false;

    if (!this.surname || !this.name) {
      this.errorMessage = "Merci de compléter tous les champs";
      this.displayErrorMessage = true;
    }
    else {
      this.confirmationService.searchAttendant(this.name, this.surname, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          if (data.errorMessage == "NOT_FOUND") {
            this.errorMessage = "Invité non trouvable";
            this.displayErrorMessage = true;
          } else if (data.errorMessage) {
            this.errorMessage = "Une erreur est survenue, veuillez réessayer.";
            this.displayErrorMessage = true;
          } else {
            this.attendantData = data;
            this.displaySecondForm = true;
          }
        }
      })
    }
  }

  onConfirm() {
    console.log("Confirmation en cours");
    this.displayErrorMessage = false;

    this.confirmationService.confirmReservation(this.attendantData.code, this.attendantData.token, this.isAttending, this.isWithPlusOne, this.isWithChildren, (err, data) => {
      if (err) {
        console.log("Erreur lors de la confirmation", err);
        this.displayErrorMessage = true;
        this.errorMessage = "Oops, une erreur est survenue lors de la confirmation de ta venue ...";
      }
      else {
        console.log("Confirmation réussie", data);
        this.name = null;
        this.surname = null;
        this.successMessage = "Confirmation réussie, merci pour votre réponse."
      }
    })

  }

}
