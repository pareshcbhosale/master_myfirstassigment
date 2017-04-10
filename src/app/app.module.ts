import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MyvehicalserveService } from './myvehicalserve.service';
import { OnclickdetailsComponent } from './onclickdetails/onclickdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    OnclickdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyvehicalserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
