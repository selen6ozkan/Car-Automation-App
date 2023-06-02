import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  signup() {
    // Örnek olarak sadece kullanıcı adı ve şifre kontrolü yapılıyor
    if (this.username && this.password) {
      this.authService.saveCredentials(this.username, this.password);
      // Diğer işlemler veya yönlendirme
    } else {
      // Hata mesajı veya işlemler
    }
  }
}
