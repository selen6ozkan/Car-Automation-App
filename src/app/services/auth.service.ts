import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private router: Router) { }

  login(username: string, password: string): void {
    // Kullanıcı adı ve şifre kontrolü yapılabilir
    if (username === 'adminSelen' && password === 'adminSifre') {
      this.isAdmin = true;
    }
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    // Çıkış yapıldığında login sayfasına yönlendiriyoruz.
    this.router.navigate(['/login']);
  }

  saveCredentials(username: string, password: string): void {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  getSavedCredentials(): { username: string, password: string } | null {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      return { username, password };
    } else {
      return null;
    }
  }

  clearSavedCredentials(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  isAuthenticated(): boolean {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return !!(username && password);
  }
}
