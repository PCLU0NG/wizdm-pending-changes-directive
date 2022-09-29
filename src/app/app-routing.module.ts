import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RedirectService } from './redirect/redirect.service';
import { CanLeaveService } from './can-leave';
import { ActionLinkObserver } from './action-link';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() { 
    return this.router.createUrlTree(['/']);
  }
}

// Define navigation routes
const routes: Routes = [
    
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'test', component: HomeComponent, canActivate: [ TestGuard ] },

  //  Applies the CanLeaveService guard on About page deactivation
  { path: 'about', component: AboutComponent, canDeactivate: [ CanLeaveService ] },

  // Definies an ActionLink when routing towards 'popup' 
  { path: 'popup', component: NotFoundComponent, canActivate: [ ActionLinkObserver ] },

  // Not Found page with external link redirection
  { path: 'not-found', component: NotFoundComponent, canActivate: [ RedirectService ] },  
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
