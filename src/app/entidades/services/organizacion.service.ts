import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organizacion } from '../interfaces/organizacion.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OrganizacionService {

  public organizacionList: Organizacion[] = [];

  private apiUrl: string = 'http://localhost:8090/api/organizaciones';

  constructor(private http: HttpClient) { }

  listarOrganizaciones():void {
    this.http.get<Organizacion[]>(this.apiUrl)
    .subscribe( r=> {
      this.organizacionList = r;
    })
  }

  createOrganizacion(body:Organizacion):void {
    this.http.post<Organizacion>(this.apiUrl, body)
      .subscribe(
        ()=>{
          alert(`${body.nombre} se ha creado correctamente!`)
          this.listarOrganizaciones();
        }
      )
  }

  deleteOrganizacion(id:number):void {
    this.http.delete<Organizacion>(`${this.apiUrl}/${id}`)
    .subscribe(
      ()=> {
        alert('Eliminado correctamente')
        this.listarOrganizaciones();
      }
    )
  }
}
