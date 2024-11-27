import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajout de CommonModule et FormsModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Message envoyé avec succès :', form.value);
      form.reset();
    } else {
      console.log('Formulaire invalide');
    }
  }
}
