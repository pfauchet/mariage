import { Component } from '@angular/core';
import M from "materialize-css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mariage';

  public ngOnInit()
  {
    console.log("Global initialization")
    M.AutoInit();
  }
}
