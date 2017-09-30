import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_ROUTING} from './app.routes';

//Services

import {CebrokerService} from './services/cebroker.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    //Obtain petitions HTTP
    HttpModule,
  ],
  providers: [
    CebrokerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
