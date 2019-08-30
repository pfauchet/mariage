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
  displayLoader: boolean = false;
  displayForms: boolean = true;
  errorMessage: string;
  successMessage: string = null;

  surname: string;
  name: string;
  attendantData;

  isAttending: boolean = true;
  isWithPlusOne: boolean = false;
  isWithChildren: boolean = false;
  nbChildren: number;
  needsBabySitter: boolean = false;
  email: string = "";

  onSearchAttendant() {
    console.log("Searching attendant");
    this.displayErrorMessage = false;
    this.displaySecondForm = false;
    this.displayLoader = true;

    if (!this.surname || !this.name) {
      this.errorMessage = "Merci de compléter tous les champs";
      this.displayErrorMessage = true;
      this.displayLoader = false;
    }
    else {
      this.confirmationService.searchAttendant(this.name, this.surname, (err, data) => {
        if (err) {
          console.log(err);
          this.errorMessage = "Une erreur est survenue, veuillez réessayer plus tard.";
          this.displayErrorMessage = true;
          this.displayLoader = false;
        } else {
          if (data.errorMessage == "NOT_FOUND") {
            this.errorMessage = "Invité non trouvable";
            this.displayErrorMessage = true;
            this.displayLoader = false;
          } else if (data.errorMessage) {
            this.errorMessage = "Une erreur est survenue, veuillez réessayer plus tard.";
            this.displayErrorMessage = true;
            this.displayLoader = false;
          } else {
            this.attendantData = data;
            this.displaySecondForm = true;
            this.displayLoader = false;
          }
        }
      })
    }
  }

  onConfirm() {
    console.log("Confirmation en cours");
    this.displayErrorMessage = false;
    this.displayLoader = true;

    if (!this.email || (this.isWithChildren && !this.nbChildren)) {
      this.errorMessage = "Merci de compléter tous les champs";
      this.displayErrorMessage = true;
      this.displayLoader = false;
    }
    else {
      this.confirmationService.confirmReservation(this.attendantData.code, this.attendantData.token, this.isAttending, this.isWithPlusOne, this.isWithChildren, this.email, this.nbChildren, this.needsBabySitter, (err, data) => {
        if (err) {
          console.log("Erreur lors de la confirmation", err);
          this.displayErrorMessage = true;
          this.errorMessage = "Oops, une erreur est survenue lors de la confirmation de ta venue ...";
          this.displayLoader = false;
        }
        else {
          if (data.errorMessage) {
            if (data.errorMessage == "INVALID_EMAIL") {
              this.errorMessage = "Format de l'email invalide.";
              this.displayErrorMessage = true;
              this.displayLoader = false;
            }
            else {
              this.errorMessage = "Une erreur est survenue, veuillez réessayer plus tard.";
              this.displayErrorMessage = true;
              this.displayLoader = false;
            }
          }
          else {
            console.log("Confirmation réussie", data);
            this.successMessage = "Confirmation réussie, merci pour votre réponse."
            this.displayForms = false;
            this.displayLoader = false;
          }
        }
      })
    }

  }
}
