import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle;
  @Input() postContent;
  @Input() dateCreation;
  @Input() loveIts;
  @Input() created_at;


  constructor() { }

  ngOnInit() {
  }

  like(){
    this.loveIts++;
  }

  disLike(){
    this.loveIts--;
  }
  }







