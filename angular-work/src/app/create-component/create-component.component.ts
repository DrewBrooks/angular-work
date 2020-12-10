import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentServiceService} from '../services/content-service.service';
import {MessageService} from '../services/message.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  newContent: any;
  // tslint:disable-next-line:max-line-length
  constructor(private contentService: ContentServiceService, private messages: MessageService, private http: HttpClient,  public dialog: MatDialog) {
    this.newContent = {
      author: '', body: '', imgUrl: '', tags: [], title: '', type: ''
    };
  }

  addContentDialog(): void{
    const contentDialog = this.dialog.open(CreateContentDialog);
    contentDialog.afterClosed().subscribe(content => {
      this.newContent = content;
      this.addContent();
    });
  }

  ngOnInit(): void {

  }

  addContent(): void{
    console.log('Event Triggered', this.newContent.title);

    this.contentService.addContent(this.newContent).subscribe(serverGame => {
      console.log('Added the game to the list', serverGame);
      this.messages.clear();
      this.messages.add('Content added successfully: ' + serverGame.title);
      this.newContentEvent.emit(serverGame);
    });
  }
}

@Component({
  selector: 'app-create-component-dialog',
  templateUrl: './create-component-dialog.component.html',
})
// tslint:disable-next-line:component-class-suffix
export class CreateContentDialog {
  newContent: any;
  constructor(public dialogRef: MatDialogRef<CreateContentDialog>) {
    this.newContent = {
      title: '',
      author: '',
      body: '',
      type: '',
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
