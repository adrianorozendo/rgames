import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCadastro!: FormGroup;
  formGroup: any;
  router: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Cadastro());
  }
  

  createForm(cadastro: Cadastro) {
    this.formCadastro = this.formBuilder.group({
      nome: [cadastro.nome],
      tipo: [cadastro.tipo],
      genero: [cadastro.genero],
      dataNascimento: [cadastro.dataNascimento],
      email: [cadastro.email],
      password: [cadastro.password]
    })
  }

  onSubmit() {
    console.log(this.formCadastro.value);
  
    this.createForm(new Cadastro()),{
      this:this.router.navigateByUrl('')
    }
  }
}
