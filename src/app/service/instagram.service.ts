import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiEndpoint = "https://qxvsirnj00.execute-api.eu-west-3.amazonaws.com/production";


  constructor(private http: HttpClient) { }

  getMyInstagramPosts(apiCallback) {
    this.http.get(this.apiEndpoint + "/instagram/me").subscribe(
      data => {
        apiCallback(null, data);
      },
      error => {
        apiCallback(error, null);
      });
  }

  getLatestInstagramPosts(apiCallback) {
    this.http.get(this.apiEndpoint + "/instagram/recent_media").subscribe(
      data => {
        apiCallback(null, data);
      },
      error => {
        apiCallback(error, null);
      });
  }

  getTrendingInstagramPosts(apiCallback) {
    this.http.get(this.apiEndpoint + "/instagram/top_media").subscribe(
      data => {
        apiCallback(null, data);
      },
      error => {
        apiCallback(error, null);
      });
  }

  updateCredentials(redirect_uri, authorization_code, apiCallback) {

    const body = {
      "redirect_uri":redirect_uri,
      "authorization_code":authorization_code
    }

    this.http.patch(this.apiEndpoint + "/instagram/credentials", body).subscribe(
      data => {
        apiCallback(null, data);
      },
      error => {
        apiCallback(error, null);
      });
  }

}
