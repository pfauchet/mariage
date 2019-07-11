import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiEndpoint = "https://qxvsirnj00.execute-api.eu-west-3.amazonaws.com/production";


  constructor(private http: HttpClient) { }

  getMyInstagramPosts(apiCallback) {
    this.http.get(this.apiEndpoint + "/instagram/me").subscribe(data => {
      if (apiCallback != null) {
        apiCallback(data);
      }
      else {
        console.log(data);
      }
    });
  }

  getLatestInstagramPosts(apiCallback) {
    this.http.get(this.apiEndpoint + "/instagram/recent_media").subscribe(data => {
      if (apiCallback != null) {
        apiCallback(data);
      }
      else {
        console.log(data);
      }
    });
  }

  getTrendingInstagramPosts(apiCallback) {
    this.http.get(this.apiEndpoint + "/instagram/top_media").subscribe(data => {
      if (apiCallback != null) {
        apiCallback(data);
      }
      else {
        console.log(data);
      }
    });
  }

}
