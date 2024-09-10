import { Component, Input } from '@angular/core';
import { Animal } from '../../models/animal';
import { CommonModule } from '@angular/common';
import { ServicoService } from '../servico.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  animais: Animal[] = [];

  constructor(private _service: ServicoService) { 
    this.findAll();
  }

  findAll() {
    this._service.getListPessoa().subscribe((resposta)=>{
      this.animais= resposta;
    })
  }
}
