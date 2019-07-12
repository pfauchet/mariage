import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  apiEndpoint = "https://qxvsirnj00.execute-api.eu-west-3.amazonaws.com/production";

  constructor(private http: HttpClient) { }
  
  createComment(name: string, surname: string, comment: string, apiCallback){
    
    const body = {
      name: name,
      surname: surname,
      comment: comment
    }
    this.http.post(this.apiEndpoint + "/commentaire", body).subscribe(
      data => {
        apiCallback(null, data);
      },
      error => {
        apiCallback(error, null);
      });
  }
}
