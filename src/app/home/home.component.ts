import { Component, OnInit } from '@angular/core';
import { Dicas } from 'src/app/models/dicas';
import { DicasService } from '../services/dicas.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Cadastro } from '../cadastro/cadastro';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(private dicasService: DicasService, private formBuilder: FormBuilder) { }

  listaDicas = [] as Dicas[]

  ngOnInit(): void {
    this.createForm(new Cadastro());
    this.carregarDicas()
    
  }

  carregarDicas() {
    this.dicasService.getDicas().subscribe( (DicasRecebidas: Dicas[]) => {
      this.listaDicas = DicasRecebidas;
      console.log(this.listaDicas);
    } )
  }
  createForm(cadastro: Cadastro) {
    this.formCadastro = this.formBuilder.group({
      nome: [cadastro.nome],
      email: [cadastro.email]
    })
  }


  onSubmit() {
    console.log(this.formCadastro.value);
  
    this.createForm(new Cadastro());

  }
  }