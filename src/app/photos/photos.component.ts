import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../service/instagram.service'
import M from "materialize-css";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  trendingInstagramPosts: any;
  recentInstagramPosts: any;
  myInstagramPosts: any;

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    let elem = document.querySelector('.tabs');
    let options = {
      duration: 0
    }

    M.Tabs.init(elem, options);
    this.loadTrendingPosts();
    this.loadRecentPosts();
    this.loadMyPosts();
  }

  loadRecentPosts() {
    this.instagramService.getLatestInstagramPosts((err, data) => {
      if (err || data.error) {
        console.log("Could not get Instagram Posts : ", err, data)
      }
      else {
        this.recentInstagramPosts = data.data;
        this.recentInstagramPosts.forEach(element => {
          if (element.media_type != "IMAGE") {
            const url = new URL(element.permalink);
            const shortCode = url.pathname.replace(/\/p\/([A-Za-z0-9-_]+)\//g, "$1");
            element.media_url = "https://instagram.com/p/" + shortCode + "/media/?size=l";
          }
        });
      }
    })
  }

  loadTrendingPosts() {
    this.instagramService.getTrendingInstagramPosts((err, data) => {
      if (err || data.error) {
        console.log("Could not get Instagram Posts : ", err, data)
      }
      else {
        this.trendingInstagramPosts = data.data;
        this.trendingInstagramPosts.forEach(element => {
          if (element.media_type != "IMAGE") {
            const url = new URL(element.permalink);
            const shortCode = url.pathname.replace(/\/p\/([A-Za-z0-9-_]+)\//g, "$1");
            element.media_url = "https://instagram.com/p/" + shortCode + "/media/?size=l";
          }
        });
      }
    })
  }

  loadMyPosts() {
    this.instagramService.getMyInstagramPosts((err, data) => {
      if (err || data.error) {
        console.log("Could not get Instagram Posts : ", err, data)
      }
      else {
        this.myInstagramPosts = data.data;
        this.myInstagramPosts.forEach(element => {
          if (element.media_type != "IMAGE") {
            const url = new URL(element.permalink);
            const shortCode = url.pathname.replace(/\/p\/([A-Za-z0-9-_]+)\//g, "$1");
            element.media_url = "https://instagram.com/p/" + shortCode + "/media/?size=l";
          }
        });
      }
    })
  }

  ngAfterViewChecked() {
    var elements = document.getElementsByClassName("instagram-caption");
    for (var i = 0; i < elements.length; i++) {
      var text = elements[i].innerHTML
      elements[i].innerHTML = text.replace(/#([A-Za-zÀ-ÖØ-öø-ÿ0-9]+)/g, '<a href="https://www.instagram.com/explore/tags/$1" target="_blank" rel="noopener noreferrer">#$1</a>');
    }

    let elem : Element = document.querySelector('li.indicator');
    let style = elem.getAttribute("style")
    if(!style){
      console.log("No style attribute", elem);
    }
    else if(!style.includes("background-color: teal;"))
      elem.setAttribute("style", style + " background-color: teal;")
  }
}
