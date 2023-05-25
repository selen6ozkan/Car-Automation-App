import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { MatIconModule } from '@angular/material/icon';
import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ModelListComponent,
    ModelFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TieredMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    SidebarModule,
    CardModule,
    ButtonModule,
    HttpClientModule
    

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
