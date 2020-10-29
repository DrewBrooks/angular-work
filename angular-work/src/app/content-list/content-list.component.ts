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
      type: 'MMORPG',
      tags: ['MMORPG', 'Video-Game']
    },
    {
      id: 1,
      title: 'Overwatch',
      body: 'Another Blizzard game.',
      author: 'Blizzard',
      imgUrl: 'https://overwatch2-static.playoverwatch.com/db9fad9b1afa62ece79b992af07bc84414f432dc/static/images/share.jpg',
      type: 'FPS',
      tags: ['Video-Game', 'Colourful']
    },
    {
      id: 2,
      title: 'Paper Mario: Thousand Year Door',
      body: 'A Nintendo game.',
      author: 'Nintendo',
      imgUrl: 'https://images.nintendolife.com/6df1a314e5ce1/paper-mario-the-thousand-year-door.original.jpg',
      type: 'RPG',
      tags: ['Video-Game', 'Puzzle']
    },
    {
      id: 3,
      title: 'Maplestory',
      body: 'An amazing game that has gone downhill, but will always be remembered as a once great game.',
      author: 'Nexon',
      imgUrl: 'https://nxcache.nexon.net/all/v1.5.2/img/gnt/games-dropdown/maplestory.jpg',
      type: 'MMORPG',
      tags: ['Video-Game', 'MMORPG', '2D']
    },
    {
      id: 4,
      title: 'The Legend of Zelda: The Wind Waker',
      body: 'A contender for one of the best Nintendo games.',
      author: 'Nintendo',
      type: 'RPG',
      tags: ['Video-Game', 'Adventure', 'Exploration']
    },
    {
      id: 5,
      title: 'Neverwinter',
      body: 'Neverwinter is a free-to-play massively multiplayer online role-playing game developed by Cryptic Studios and released by Perfect World Entertainment for Microsoft Windows in 2013, Xbox One in 2015, and PlayStation 4 in 2016..',
      author: 'Cryptic Studios',
      imgUrl: 'https://cdn.mmohuts.com/wp-content/uploads/2015/03/NW_604x423.jpg',
      type: 'MMORPG',
      tags: ['Video-Game', 'D&D', 'Combat']
    }
    ];
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
  }

}
