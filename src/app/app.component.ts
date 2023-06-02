import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'car-automation-app';
  sidebarOpened: boolean = false;

  showMain: boolean = false;

  constructor(private router: Router) {}
  showMainPage() {
    this.showMain = true;
    this.router.navigate(['/home']);
  }
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
   
  }

 
}
