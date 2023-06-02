import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ModelListComponent } from './pages/model-list/model-list.component';
import { ModelFormComponent } from './pages/model-form/model-form.component';

import { MatIconModule } from '@angular/material/icon';
import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { DataService } from './services/data.service';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PaginatorModule } from 'primeng/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ModelFormComponent,
    BrandListComponent,
    SignupComponent,
    LoginComponent,
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
    HttpClientModule,
    ToolbarModule,
    SplitButtonModule,
    MatSidenavModule,
    PaginatorModule,
    MatToolbarModule,
    MatCardModule,
    TableModule
    

  ],
  providers: [DataService,AuthService,UserService,MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]

})
export class AppModule { }
