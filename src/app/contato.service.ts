import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

 contatoUrl = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(private http: HttpClient) { }

  Listar(){
return this.http.get<Array<any>>(`${this.contatoUrl}`);
}

  

}
