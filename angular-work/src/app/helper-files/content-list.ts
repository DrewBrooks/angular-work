import {Content} from './content-interface';


export class ContentList {
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _items: Content[];


  constructor(items: Content[]) {
    this._items = [];
  }
  arrayLength(): number{
    return this.items.length;
}

  increaseArray(newContent: Content): void{
    this.items.push(newContent);
  }
  set items(value: Content[]) {
    this._items = value;
  }

  get items(): Content[] {
    return this._items;
  }
}
