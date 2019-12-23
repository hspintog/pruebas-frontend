import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponentComponent } from './lista-component/lista-component.component';
import { PerfilComponentComponent } from './perfil-component/perfil-component.component';
import { HttpModule } from '@angular/http';
import {ListaComponentService} from './lista-component/lista-component.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatPaginatorModule, MatTableModule,
MatSortModule, MatPaginatorIntl } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { PerfilComponentService } from './perfil-component/perfil-component.service';
@NgModule({
  declarations: [
    AppComponent,
    ListaComponentComponent,
    PerfilComponentComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [
    ListaComponentService,
    PerfilComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
