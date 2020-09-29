import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LivreDorComponent } from './livre-dor/livre-dor.component'
import { PhotosComponent } from './photos/photos.component'
import { FaqComponent } from './faq/faq.component'
import { ListeMariageComponent } from './liste-mariage/liste-mariage.component'
import { OauthRedirectComponent } from './oauth-redirect/oauth-redirect.component';
import { OauthLoginComponent } from './oauth-login/oauth-login.component'
import { QrCodeComponent } from './qr-code/qr-code.component'

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'livre', component: LivreDorComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'liste', component: ListeMariageComponent },
  { path: 'oauth-redirect', component: OauthRedirectComponent },
  { path: 'oauth-login', component: OauthLoginComponent },
  { path: 'qr-code', component: QrCodeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
