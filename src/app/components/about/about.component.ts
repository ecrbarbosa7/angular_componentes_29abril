import { Component } from '@angular/core';
import { FormularioService } from '../formulario/formulario.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public formularioService: FormularioService) {}
}