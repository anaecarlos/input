import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageClipComponent } from './page-clip/page-clip.component';
import { PageEllipsisComponent } from './page-ellipsis/page-ellipsis.component';
import { TextOverflowComponent } from './text-overflow/text-overflow.component';

@NgModule({
  declarations: [
    AppComponent,
    PageClipComponent,
    PageEllipsisComponent,
    TextOverflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
