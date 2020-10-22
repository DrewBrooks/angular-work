import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent implements OnInit {

  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList([]);

    const content1: Content = {
      id: 0,
      title: 'World of Warcraft',
      body: 'An MMORPG',
      author: 'Blizzard',
      imgUrl: 'https://www.extremetech.com/wp-content/uploads/2018/04/BattleforFeature.jpg',
      tags: ['MMORPG', 'Video-Game']
    };
    const content2: Content = {
      id: 1,
      title: 'Overwatch',
      body: 'Another Blizzard game.',
      author: 'Blizzard',
      imgUrl: 'https://overwatch2-static.playoverwatch.com/db9fad9b1afa62ece79b992af07bc84414f432dc/static/images/share.jpg',
      tags: ['Video-Game', 'Colourful']
    };
    const content3: Content = {
      id: 2,
      title: 'Paper Mario: Thousand Year Door',
      body: 'A Nintendo game.',
      author: 'Nintendo',
      imgUrl: 'https://images.nintendolife.com/6df1a314e5ce1/paper-mario-the-thousand-year-door.original.jpg',
      tags: ['Video-Game', 'Puzzle']
    };

    this.contentList.increaseArray(content1);
    this.contentList.increaseArray(content2);
    this.contentList.increaseArray(content3);
  }
  ngOnInit(): void {
  }

}
