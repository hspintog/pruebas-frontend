import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilComponentService } from './perfil-component.service';

@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.css']
})
export class PerfilComponentComponent implements OnInit {
  
  id: any;
  public respuesta: any;
 
  constructor(private rutaActiva: ActivatedRoute,
    private perfilComponentService: PerfilComponentService
    ) { }
  
  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
    this.consultarPerfil(this.id);   
  }

  consultarPerfil(id: any){
      this.perfilComponentService.consultarPerfilUser(this.id).subscribe(response => {
      const { result } = response
      this.respuesta = result
      console.log(this.respuesta);
    })
  }
  

}
