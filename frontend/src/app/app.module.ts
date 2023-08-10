import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { UsersComponent } from './components/pages/auth/users/users.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TableComponent } from './components/core/table/table.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/core/form/form.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/core/details/details.component';
import { PatientsComponent } from './components/pages/patients/patients/patients.component';
import { TestsComponent } from './components/pages/tests/tests/tests.component';
import { DoctorsComponent } from './components/pages/doctors/doctors/doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportsComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    DetailsComponent,
    PatientsComponent,
    DoctorsComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'tests', component: TestsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/register', component: RegisterComponent },
      { path: 'auth/users', component: UsersComponent },
      { path: 'auth/manage', component: UsersComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
