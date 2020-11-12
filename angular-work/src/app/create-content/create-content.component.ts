import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent: Content;
  constructor() {
    this.newContent ={
      author: '', body: '', id: 0, imgUrl: '', tags: [], title: '', type: ''
    }
  }

  ngOnInit(): void {
    this.newContentEvent.emit(this.newContent);
  }

  addContent(): void{
    console.log('Event Triggered', this.newContent.title);
    this.newContent.id = +this.newContent.id;
    this.newContent.author;
    this.newContent.body;
    this.newContent.imgUrl;
    this.newContent.type;
    this.newContent.tags;
    this.newContentEvent.emit(this.newContent);

  }
}
