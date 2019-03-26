import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DaySheetComponent } from './day-sheet/day-sheet.component';
import { MisComponent } from './mis/mis.component';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
						{ path: 'home', component: HomeComponent},
						{ path: 'login', component: LoginComponent},
						{ path: 'dashboard', component: DashboardComponent},
						{ path: 'today', component: DaySheetComponent},
						{ path: 'myData', component: MisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
