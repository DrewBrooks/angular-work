import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/contentDb';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private messages: MessageService) { }
  getContent(): Observable<Content[]>{
    this.messages.add('Content retrieved!');
    return of(CONTENTLIST);
  }
}
