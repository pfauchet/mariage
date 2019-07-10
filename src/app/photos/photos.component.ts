import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../service/instagram.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  instagramPosts: any;

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.instagramService.getLatestInstagramPosts((data)=> {
      this.instagramPosts = data.data;
      this.instagramPosts.forEach(element => {
        if (element.media_type != "IMAGE")
          element.displayPost=false;
        else 
          element.displayPost=true;
      });
    })
  }

}
