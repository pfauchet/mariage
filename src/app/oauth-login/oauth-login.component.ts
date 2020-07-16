import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oauth-login',
  templateUrl: './oauth-login.component.html',
  styleUrls: ['./oauth-login.component.css']
})
export class OauthLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var redirectUri = location.origin + '/oauth-redirect';
    
    window.location.href = 'https://www.facebook.com/v3.3/dialog/oauth?client_id=478083806341667&redirect_uri=' +  redirectUri +'&state=toto&response_type=code&scope=instagram_basic manage_pages';
  }

}
