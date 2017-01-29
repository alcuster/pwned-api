import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { PwnedService } from './pwned.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule
  ],
  providers: [PwnedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
