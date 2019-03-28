import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DaySheetComponent } from './day-sheet/day-sheet.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { NotifcationsListComponent } from './notifcations-list/notifcations-list.component';
import { AddDataFormComponent } from './add-data-form/add-data-form.component';
import { MisComponent } from './mis/mis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotifyPopUpComponent } from './notify-pop-up/notify-pop-up.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { CompanyRecord } from './company-record';
import { CompanyListService } from './company-list.service';
import { NotificationRecord } from './notification-record';
import { NotificationServiceService } from './notification-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    DaySheetComponent,
    HomeComponent,
    NotificationComponent,
    NotifcationsListComponent,
    AddDataFormComponent,
    MisComponent,
    NavbarComponent,
    NotifyPopUpComponent,
    EditDetailsComponent,
    AlertBoxComponent,
    NotificationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    NotifcationsListComponent,
    NavbarComponent,
    NotifyPopUpComponent,
    EditDetailsComponent,
    AlertBoxComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
