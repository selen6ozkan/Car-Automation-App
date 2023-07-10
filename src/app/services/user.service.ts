import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { username: string, password: string }[] = [];

  constructor() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  checkUserExists(username: string): boolean {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    } else {
      this.users = [];
    }
    return this.users.some(user => user.username === username);
  }

  signUp(username: string, password: string): void {
    this.users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  
}
