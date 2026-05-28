import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(public formularioService: FormularioService) {}

  textoHeader = 'BookFinder';
  textoAbout = 'Livraria online para encontrares livros por categoria e interesse.';
  textoServices = 'Romance, fantasia, terror, tecnologia, aventura e livros infantis.';
  textoContact = 'contacto@bookfinder.pt';

  opcoesHeader = ['BookFinder', 'Livraria Central', 'Mundo dos Livros', 'Biblioteca Online'];

  opcoesAbout = [
    'Livraria online para encontrares livros por categoria e interesse.',
    'Descobre novos livros de forma simples e rápida.',
    'A tua plataforma para procurar livros por género.',
    'Encontra recomendações de leitura num só lugar.'
  ];

  opcoesServices = [
    'Romance, fantasia, terror, tecnologia, aventura e livros infantis.',
    'Livros escolares, técnicos, ficção e literatura portuguesa.',
    'Best-sellers, clássicos, novidades e livros juvenis.',
    'Pesquisa por autor, categoria, preço e preferência.'
  ];

  opcoesContact = [
    'contacto@bookfinder.pt',
    'apoio@livrariaonline.pt',
    'info@mundodoslivros.pt',
    'suporte@bookfinder.pt'
  ];

  enviar() {
    this.formularioService.atualizarTextos(
      this.textoHeader,
      this.textoAbout,
      this.textoServices,
      this.textoContact
    );
  }
}