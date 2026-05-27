import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { InicioComponent } from './pages/inicio/inicio';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, InicioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}