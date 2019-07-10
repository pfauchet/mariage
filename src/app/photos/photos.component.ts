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
    this.instagramService.getLatestInstagramPosts((data) => {
      this.instagramPosts = data.data;
      this.instagramPosts.forEach(element => {
        if (element.media_type != "IMAGE")
          element.displayPost = false;
        else
          element.displayPost = true;
      });
    })
  }

  ngAfterViewChecked() {
    var elements = document.getElementsByClassName("instagram-caption");
    for (var i = 0; i < elements.length; i++) {
      var text = elements[i].innerHTML
      elements[i].innerHTML = text.replace(/#([A-Za-zÀ-ÖØ-öø-ÿ0-9]+)/g, '<a href="https://www.instagram.com/explore/tags/$1" target="_blank" rel="noopener noreferrer">#$1</a>');
    }
  }
}
