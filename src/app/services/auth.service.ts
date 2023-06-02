import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  saveCredentials(username: string, password: string): void {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  getSavedCredentials(): { username: string, password: string }| null {
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

  isLoggedIn(): boolean {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return !!username && !!password;
  }
}
