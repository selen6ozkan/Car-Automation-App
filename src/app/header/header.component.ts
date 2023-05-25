import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }



  menuItems = [
    { label: 'Anasayfa', icon: 'pi pi-home', routerLink: '/anasayfa' },
    { label: 'Ürünler', icon: 'pi pi-list', routerLink: '/urunler' },
    { label: 'Hakkımızda', icon: 'pi pi-info-circle', routerLink: '/hakkimizda' },
    { label: 'İletişim', icon: 'pi pi-envelope', routerLink: '/iletisim' }
  ];
}
