import { Component, OnInit } from '@angular/core';
import {ListaComponentService} from './lista-component.service';
@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css']
})
export class ListaComponentComponent implements OnInit {
  public respuesta: any;
  
  constructor(
    private listarComponentService: ListaComponentService
  ) { }

  ngOnInit() {
    this.obtenerData();
    
  }


  obtenerData(){
   this.listarComponentService.consultarDatos().subscribe(response => {
     const { result } = response
     this.respuesta = result
     console.log(this.respuesta);
   })
    
  }

}
