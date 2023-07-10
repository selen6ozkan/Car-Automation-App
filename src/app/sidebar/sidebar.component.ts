import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() opened = false;
  
  constructor(private router: Router,public authService: AuthService) {}

  toggleSidebar() {
    this.opened = !this.opened;
  }
 
  isActive(route: string): boolean {
      // "/" rotası (Home) için özel durumu kontrol ediyoruz
  if (route === '/home' && this.router.url === '/home') {
    return true;
  }
    return this.router.url === route;
  }


  logout() {
    // Çıkış yapıldığında login sayfasına yönlendiriyoruz.
    this.authService.logout();
    this.opened = false;
    this.router.navigate(['/login']);
  }
}
