import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { AuthguardService } from './services/authguard/authguard.service';
import { UploaderComponent } from './controllers/dashboard/uploader/uploader.component';
import { HealthComponent } from './controllers/dashboard/health/health.component';
import { AboutComponent } from './controllers/dashboard/about/about.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthguardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService] },
  { path: 'uploadform', component: UploaderComponent, canActivate: [AuthguardService] },
  { path: 'self_assessment', component: HealthComponent, canActivate: [AuthguardService] },
  { path: 'about', component: AboutComponent, canActivate: [AuthguardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
