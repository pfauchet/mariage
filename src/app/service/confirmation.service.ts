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

  confirmReservation(code: string, token: string, isAttending: boolean, isWithPlusOne: boolean, isWithChildren: boolean, email: string, apiCallback) {
    const body = {
      code: code,
      token: token,
      isAttending: isAttending,
      isWithChildren: isWithChildren,
      isWithPlusOne: isWithPlusOne,
      email: email
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