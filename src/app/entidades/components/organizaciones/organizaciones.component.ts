import { Component, Input } from '@angular/core';
import { Organizacion } from '../../interfaces/organizacion.interface';
import { OrganizacionService } from '../../services/organizacion.service';

@Component({
  selector: 'entidades-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent {
  @Input()
  public organizaciones: Organizacion[] = [];

  constructor(
    private organizacionService: OrganizacionService
  ) {}

  onDelete(id:number, organizacion:string) {
    if(confirm(`¿Estás seguro que deseas eliminar a ${organizacion}?`))
    return this.organizacionService.deleteOrganizacion(id);
  }
}
