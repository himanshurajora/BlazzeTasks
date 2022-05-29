import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/utils/material.modules';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
     declarations: [AppComponent, NavbarComponent, HomeComponent],
     imports: [
          BrowserModule,
          AppRoutingModule,
          BrowserAnimationsModule,
          MaterialModule,
          MatGridListModule,
          MatCardModule,
          MatMenuModule,
          MatIconModule,
          MatButtonModule,
          LayoutModule,
          FormsModule,
          ReactiveFormsModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
