import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PaginationModule} from 'ng2-pagination';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng2PaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
