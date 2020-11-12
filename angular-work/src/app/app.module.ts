import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypePipePipe } from './type-pipe.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { BorderStyleDirective } from './border-style.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TypePipePipe,
    HoverStyleDirective,
    HoverStyleDirective,
    BorderStyleDirective,
    CreateContentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
