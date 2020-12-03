import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/contentDb';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>('api/content', content,
      this.httpOptions);
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put('api/content', content,
      this.httpOptions);
  }

  constructor(private messages: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]>{
    this.messages.add('Content retrieved!');
    return this.http.get<Content[]>('api/content');
  }
}
