import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = ''; 
  email: string = ''; 
  message: string = ''; 
  constructor() { }

  submitForm(): void {
    // Formun gönderim işlemleri burada gerçekleştirilebilir
    console.log('Form submitted');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);

    // Form gönderildikten sonra alanları temizleme
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
