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
    this.displayErrorMessage = false;
    this.displaySecondForm = false;
  }

  displayErrorMessage: boolean = false;
  displaySecondForm: boolean = false;
  errorMessage: string;

  surname: string;
  name: string;
  decision: string;

  attendantData;

  onSearchAttendant(){
    console.log("Searching attendant");
    this.displayErrorMessage = false;
    this.displaySecondForm = false;

    if (!this.surname || !this.name) {
      this.errorMessage = "Merci de compléter tous les champs";
      this.displayErrorMessage = true;
    }
    else{
      this.confirmationService.searchAttendant(this.name, this.surname, (err, data) =>{
        if(err) {
          console.log(err);
        } else {
          if (data.errorMessage == "NOT_FOUND") {
            this.errorMessage = "Invité non trouvable";
            this.displayErrorMessage = true;
          } else if (data.errorMessage){
            this.errorMessage = "Une erreur est survenue, veuillez réessayer.";
            this.displayErrorMessage = true;
          } else {
            this.attendantData = data;
            this.attendantData.childList = [];
            for(var i = 0; i < data.children; i++){
              this.attendantData.childList[i]=i+1
            }
            console.log(this.attendantData)
            this.displaySecondForm = true;
          }
        }
      })
    }
  }

  onConfirm() {
    console.log("Confirmation en cours");
    this.displayErrorMessage = false;

    if (!this.surname || !this.name || this.decision == "0") {
      this.errorMessage = "Merci de compléter tous les champs";
      this.displayErrorMessage = true;
    }
    else {
      let attends = (this.decision == "1");

      this.confirmationService.confirmReservation(this.name, this.surname, attends, 1, (err, data) => {
        if (err) {
          console.log("Erreur lors de la confirmation", err);
          this.displayErrorMessage = true;
          this.errorMessage = "Oops, une erreur est survenue lors de la confirmation de ta venue ...";
        }
        else {
          console.log("Confirmation réussie", data);
          this.name = null;
          this.surname = null;
          this.decision = "0";
        }

      })
    }
  }

}
