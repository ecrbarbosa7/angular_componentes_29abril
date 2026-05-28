import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  tituloHeader = 'BookFinder';
  tituloAbout = 'Livraria online para encontrares livros por categoria e interesse.';
  tituloServices = 'Romance, fantasia, terror, tecnologia, aventura e livros infantis.';
  tituloContact = 'contacto@bookfinder.pt';

  atualizarTextos(header: string, about: string, services: string, contact: string) {
    this.tituloHeader = header;
    this.tituloAbout = about;
    this.tituloServices = services;
    this.tituloContact = contact;
  }
}