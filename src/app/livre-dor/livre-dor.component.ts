import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../service/commentaire.service'

@Component({
  selector: 'app-livre-dor',
  templateUrl: './livre-dor.component.html',
  styleUrls: ['./livre-dor.component.css']
})
export class LivreDorComponent implements OnInit {
  name: string;
  surname: string;
  comment: string;

  constructor(private commentaireService: CommentaireService) { }

  ngOnInit() {
  }

  onSendComment(){
    console.log("Sending comment")
    this.commentaireService.createComment(this.name, this.surname, this.comment, (data: any) => {
      console.log(data);
    });
  }
}
