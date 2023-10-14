import { Component, Input } from '@angular/core';
import { Organizacion } from '../../interfaces/organizacion.interface';

@Component({
  selector: 'entidades-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent {
  @Input()
  public organizaciones: Organizacion[] = [];
}
