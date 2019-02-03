import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ContextosModule } from './contextos/contextos.module';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './comum/loading/loading.component';
import { FormComponent } from './comum/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    ContextosModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
