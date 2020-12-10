import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ActivatedRoute} from '@angular/router';
import {ContentServiceService} from '../services/content-service.service';

@Component({
  selector: 'app-content-detail-view',
  templateUrl: './content-detail-view.component.html',
  styleUrls: ['./content-detail-view.component.scss']
})
export class ContentDetailViewComponent implements OnInit {
  id: number;
  content: Content;
  constructor(private route: ActivatedRoute, private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.contentService.getContentDetail(this.id).subscribe(singleContent => {
        this.content = singleContent;
      });
    });
  }

}
