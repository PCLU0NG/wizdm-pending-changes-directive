import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatSlideToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { IconComponent } from './icon/icon.component';
import { RedirectModule } from './redirect/redirect.module';
import { DialogModule } from './dialog/dialog.module';
import { CanLeaveModule } from './can-leave';
import { ActionLinkModule } from './action-link';

@NgModule({
  imports:      [   
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule,

    FlexLayoutModule, 

    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    RedirectModule,
    DialogModule,
    CanLeaveModule,
    ActionLinkModule,
    AppRoutingModule
  ],
  
  declarations: [ 
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    IconComponent
  ],

  providers: [],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
