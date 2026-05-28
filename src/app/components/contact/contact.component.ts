import { Component } from '@angular/core';
import { FormularioService } from '../formulario/formulario.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public formularioService: FormularioService) {}
}