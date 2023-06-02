import { Component,EventEmitter, Output} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';



@Component({
  selector: 'app-header',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

 
  menuItems = [
    { label: 'Anasayfa', icon: 'pi pi-home', routerLink: '/anasayfa' },
    { label: 'Ürünler', icon: 'pi pi-list', routerLink: '/urunler' },
    { label: 'Hakkımızda', icon: 'pi pi-info-circle', routerLink: '/hakkimizda' },
    { label: 'İletişim', icon: 'pi pi-envelope', routerLink: '/iletisim' }
  ];
}
