import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor( private router: Router) { }
  
  ngOnInit(
  ){};
  
  redirecion(){
    console.log("Inicio de redirecion ")
    this.router.navigate(['listaUsers']);
  }

}
