import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  isRegistered: boolean = false;

  constructor(private router: Router,private authService: AuthService,private userService: UserService) {}
  checkRegistration(): void {
    this.isRegistered = this.userService.checkUserExists(this.username);
  }

  signUp(): void {
    if (this.username && this.password) { // Kullanıcı adı ve şifre boş değilse
      if (!this.isRegistered) {
        // Eğer kullanıcı kayıtlı değilse, kayıt yap
        this.userService.signUp(this.username, this.password);
        this.isRegistered = true;
        this.router.navigate(['/home']);
      }
    }
  }
  
  navigateToLogin() {
    // Login sayfasına yönlendirin
    this.router.navigate(['/login']);
  }
}
