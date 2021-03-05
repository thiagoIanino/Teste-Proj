import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/contato.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {



 deputados : Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.listar();
    console.log(this.deputados);
  }

  listar(){
    this.contatoService.Listar().subscribe(dados => this.deputados = dados);

  }
}
