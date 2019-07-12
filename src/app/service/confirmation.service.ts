import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private apiEndpoint = "https://qxvsirnj00.execute-api.eu-west-3.amazonaws.com/production";

  constructor(private http: HttpClient) { }

  confirmReservation(name: string, surname: string, code: string, attends: boolean, attendants: number, apiCallback) {

    const body = {
      name: name,
      surname: surname,
      code: code,
      attends: attends,
      attendants: attendants
    }

    this.http.post(this.apiEndpoint + "/confirmation", body).subscribe(
      data => {
        apiCallback(null, data);
      },
      error => {
        apiCallback(error, null);
      });
  }
}