import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentServiceService} from '../services/content-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent implements OnInit {

  contentList: Content[];
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

}
