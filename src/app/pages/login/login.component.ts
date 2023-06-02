import { Component,Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'adminSelen';
  password: string = 'adminSifre';
  showMain: boolean = false; 
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router, private messageService: MessageService) {}

  ngOnInit() {
    this.router.navigate(['/login']); // Sayfa yenilendiğinde login sayfasına yönlendir
  }
   login() {
   
    if (this.username === 'adminSelen' && this.password === 'adminSifre') {
      this.loginSuccess.emit();
      this.router.navigate(['/home']);
      console.log("dogru")
      
    } else {
      // Kullanıcı adı veya şifre hatalıysa hata mesajı gösterin
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid username or password' });
    }
  }
  showMainPage() {
    this.showMain = true;
  }
  navigateToSignUp() {
    // Sign Up sayfasına yönlendirin
    this.router.navigate(['/signup']);
  }
}
