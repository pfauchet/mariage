import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private apiEndpoint = "https://qxvsirnj00.execute-api.eu-west-3.amazonaws.com/production";

  constructor(private http: HttpClient) { }


  searchAttendant(name: string, surname: string, apiCallback) {
    this.http.get(this.apiEndpoint + "/confirmation?surname=" + surname + "&name=" + name).subscribe(
      data => {
        apiCallback(null, data);
      },
      error => {
        apiCallback(error, null);
      });
  }

  confirmReservation(name: string, surname: string, attends: boolean, attendants: number, apiCallback) {

    const body = {
      name: name,
      surname: surname,
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