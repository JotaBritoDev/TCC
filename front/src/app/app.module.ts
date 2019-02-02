import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ContextosModule } from './contextos/contextos.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    ContextosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
