import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { ConfirmationService } from './service/confirmation.service';
import { LivreDorComponent } from './livre-dor/livre-dor.component'

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProgrammeComponent,
    ConfirmationComponent,
    LivreDorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcJ5ioyLPMbyNXVTd1S3RmyQDpPJyNee4'
    })
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
