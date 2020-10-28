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
      id: 2,
      title: 'Maplestory',
      body: 'An amazing game that has gone downhill, but will always be remembered as a once great game.',
      author: 'Nexon',
      imgUrl: 'https://nxcache.nexon.net/all/v1.5.2/img/gnt/games-dropdown/maplestory.jpg',
      type: 'MMORPG',
      tags: ['Video-Game', 'MMORPG', '2D']
    },
    {
      id: 2,
      title: 'The Legend of Zelda: The Wind Waker',
      body: 'A contender for one of the best Nintendo games.',
      author: 'Nintendo',
      imgUrl: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/gamecube_12/SI_GCN_TheLegendOfZeldaTheWindWaker_image1600w.jpg',
      type: 'RPG',
      tags: ['Video-Game', 'Adventure', 'Exploration']
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
