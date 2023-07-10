import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { ModelListComponent } from './pages/model-list/model-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [  
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'brand', component: BrandListComponent },
  { path: 'model', component: ModelListComponent },
  {path:'contact',component:ContactComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
