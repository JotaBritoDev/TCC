import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './comum/form/form.component';
import { ContextosModule } from './contextos/contextos.module';
import { LoginComponent } from './login/login.component';

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
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

{}
