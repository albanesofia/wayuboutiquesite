import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'; // Ajustez le chemin si nécessaire
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // Ajoutez HeaderComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'boutique-wayuu';
}
