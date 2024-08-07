import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HousingDataService } from './services/housing-data.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserStorageService } from './services/user-storage.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { DropdownComponent } from './Components/dropdown/dropdown.component';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent},  
  { path: 'property-detail/:Id', component: PropertyDetailComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: '**', component: PropertyListComponent } // ** acts as a fallback route that will be navigated to when no other route is matched
]

@NgModule({ declarations: [
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
        NavBarComponent,
        AddPropertyComponent,
        PropertyDetailComponent,
        UserLoginComponent,
        UserRegisterComponent,
        DropdownComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        ButtonsModule.forRoot()
        // BrowserAnimationsModule,
        // BsDropdownModule.forRoot()
    ], providers: [
        HousingDataService,
        UserStorageService,
        AlertifyService,
        AuthService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
