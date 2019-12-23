import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaComponentComponent} from './lista-component/lista-component.component'
import {PerfilComponentComponent} from './perfil-component/perfil-component.component'


const routes: Routes = [
  //{path: '', redirectTo: 'listaUsers', pathMatch: 'full'},
  { path: 'listaUsers', component: ListaComponentComponent },
  { path: 'perfilUser/:id', component: PerfilComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
