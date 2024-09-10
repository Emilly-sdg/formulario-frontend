import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
 
  personForm: FormGroup

  constructor(private service: ServicoService,
    private router: Router,
    private _fb: FormBuilder
  ){
    this.personForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    alert('Formulário enviado com sucesso!');
  }

  enviarFormulario(): void {
    const animal = new Animal(this.personForm);
    this.service.criarFormularioAtual(animal);
    this.router.navigate(['visualizacao']);
  }

}
