import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProgrammeComponent } from './programme/programme.component';
import { LieuxComponent } from './lieux/lieux.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'lieux', component: LieuxComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
