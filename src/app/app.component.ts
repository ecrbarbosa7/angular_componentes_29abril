import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FormularioComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}