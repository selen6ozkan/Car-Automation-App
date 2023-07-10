import { Component,Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private router: Router, private messageService: MessageService, private authService: AuthService) {}

  ngOnInit() {
    this.router.navigate(['/login']); // Sayfa yenilendiğinde login sayfasına yönlendir
  }
  login() {
    const savedCredentials = this.authService.getSavedCredentials();
    if (
      savedCredentials &&
      this.username === savedCredentials.username &&
      this.password === savedCredentials.password
    ) {
      this.authService.login(this.username, this.password); // Giriş yapıldığında AuthService'deki login metodu çağrılıyor
      this.router.navigateByUrl('/home');
      console.log('doğru');
    } else {
      // Kullanıcı adı veya şifre hatalıysa hata mesajı gösterin
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid username or password'
      });
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
