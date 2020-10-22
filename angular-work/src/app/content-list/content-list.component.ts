import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent implements OnInit {

  contentList: Content[];
  constructor() {
    this.contentList = [
     {
      id: 0,
      title: 'World of Warcraft',
      body: 'An MMORPG',
      author: 'Blizzard',
      imgUrl: 'https://www.extremetech.com/wp-content/uploads/2018/04/BattleforFeature.jpg',
      tags: ['MMORPG', 'Video-Game']
    },
    {
      id: 1,
      title: 'Overwatch',
      body: 'Another Blizzard game.',
      author: 'Blizzard',
      imgUrl: 'https://overwatch2-static.playoverwatch.com/db9fad9b1afa62ece79b992af07bc84414f432dc/static/images/share.jpg',
      tags: ['Video-Game', 'Colourful']
    },
    {
      id: 2,
      title: 'Paper Mario: Thousand Year Door',
      body: 'A Nintendo game.',
      author: 'Nintendo',
      imgUrl: 'https://images.nintendolife.com/6df1a314e5ce1/paper-mario-the-thousand-year-door.original.jpg',
      tags: ['Video-Game', 'Puzzle']
    },
      {
        id: 2,
        title: 'Paper Mario: Thousand Year Door',
        body: 'A Nintendo game.',
        author: 'Nintendo',
        imgUrl: 'https://images.nintendolife.com/6df1a314e5ce1/paper-mario-the-thousand-year-door.original.jpg',
        tags: ['Video-Game', 'Puzzle']
      },
      {
        id: 2,
        title: 'Paper Mario: Thousand Year Door',
        body: 'A Nintendo game.',
        author: 'Nintendo',
        imgUrl: 'https://images.nintendolife.com/6df1a314e5ce1/paper-mario-the-thousand-year-door.original.jpg',
        tags: ['Video-Game', 'Puzzle']
      }
    ];
  }

  ngOnInit(): void {
  }

}
