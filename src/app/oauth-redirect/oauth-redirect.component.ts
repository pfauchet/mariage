import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../service/instagram.service'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-oauth-redirect',
  templateUrl: './oauth-redirect.component.html',
  styleUrls: ['./oauth-redirect.component.css']
})
export class OauthRedirectComponent implements OnInit {

  redirectUri: string;
  authorizationCode: string;

  constructor(private instagramService: InstagramService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.authorizationCode = params['code'];
            this.redirectUri = location.origin + location.pathname;

            this.instagramService.updateCredentials(this.redirectUri, this.authorizationCode, (err, data)=>{
              if(err){
                console.log(err)
              }
              else{
                console.log(data)
                this.router.navigate(['/'])
              }
            })
        });
  }

}
