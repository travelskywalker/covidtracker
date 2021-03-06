import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';

import { LoginComponent } from './components/login/login.component';
import { GsuiteService } from './services/gsuite/gsuite/gsuite.service';
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,

} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { UploaderComponent } from './controllers/dashboard/uploader/uploader.component';
import { AboutComponent } from './controllers/dashboard/about/about.component';
import { HealthComponent } from './controllers/dashboard/health/health.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientsListComponent } from './components/patients-list/patients-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    UploaderComponent,
    AboutComponent,
    HealthComponent,
    PatientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  entryComponents: [
    
  ],
  providers: [GsuiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
