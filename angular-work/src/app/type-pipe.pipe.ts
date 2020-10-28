import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'typePipe'
})
export class TypePipePipe implements PipeTransform {

  transform(game: Content[], filter: string): Content[] {
    return game.filter(content => content.type === filter);
  }

}
