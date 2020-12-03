import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentServiceService} from '../services/content-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent implements OnInit {
  newContent: any;

  contentList: Content[] = [];
  constructor(private contentService: ContentServiceService) {
    this.searchWord = '';
  }

  searchWord: string;

  submit(title: string): void{
    if (this.contentList.filter(content => content.title === title).length > 0){
      this.searchWord = 'Content found';
    }else{
      this.searchWord = 'Content not found';
    }
    console.log(this.searchWord);
  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(cl  => {
      this.contentList = cl;
    });
  }

  getTheGamesList(): void{
    this.contentService.getContent().subscribe(cl => {
      // content came back! maybe log the length
      this.contentList = cl;
    });
  }

  save(newGameFromChild: Content): void {
    this.contentList.push(newGameFromChild);
    // We need to clone the array for the pipe to work
    this.contentList = Object.assign([], this.contentList);
  }

  updateTheList(message: string): void{
    console.log(message);
    this.getTheGamesList();
  }
}
