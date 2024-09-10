import { Animal } from './../../models/animal';
import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizacao',
  standalone: true,
  imports: [],
  templateUrl: './visualizacao.component.html',
  styleUrl: './visualizacao.component.css',
})
export class VisualizacaoComponent {
  animal: Animal;

  constructor(private _service: ServicoService, private _router: Router) {
    this.animal = this._service.getFormularioAtual();
  }

  enviarFormulario(): void {
    this._service.criarAnimal(this.animal).subscribe((response) => {
      this._router.navigate(['lista']);
    });
  }
}
