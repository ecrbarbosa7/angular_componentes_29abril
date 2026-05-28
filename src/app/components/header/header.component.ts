import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioService } from '../formulario/formulario.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public formularioService: FormularioService) {}
}