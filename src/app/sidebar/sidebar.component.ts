import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() opened = false;
  
  toggleSidebar() {
    this.opened = !this.opened;
  }
  constructor(private router: Router) {}

  isActive(route: string): boolean {
      // "/" rotası (Home) için özel durumu kontrol ediyoruz
  if (route === '/home' && this.router.url === '/home') {
    return true;
  }
    return this.router.url === route;
  }


  logout() {
    // Çıkış yapma işlemlerini burada gerçekleştirin
  }
}
