import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ListaComponentService{

  constructor(private http: HttpClient) {
  }

  consultarDatos(): Observable<any> {
    return this.http.get("https://gorest.co.in/public-api/users?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X")
  }

}

