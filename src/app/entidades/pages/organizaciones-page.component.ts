import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../services/organizacion.service';
import { Organizacion } from '../interfaces/organizacion.interface';

@Component({
  selector: 'entidades-organizaciones-page',
  templateUrl: 'organizaciones-page.component.html'
})

export class OrganizacionesPageComponent implements OnInit {

  constructor(
    private organizacionService: OrganizacionService
  ) {}

  get organizaciones(): Organizacion[] {
    return this.organizacionService.organizacionList;
  }

  public listadoOrganizaciones : Organizacion[] = [];

  ngOnInit() {
    this.organizacionService.listarOrganizaciones();
    console.log(this.organizaciones)
  }
}
