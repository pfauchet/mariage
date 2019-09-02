import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LivreDorComponent } from './livre-dor/livre-dor.component'
import { PhotosComponent } from './photos/photos.component'
import { ServicesComponent } from './services/services.component'

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'livre', component: LivreDorComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
