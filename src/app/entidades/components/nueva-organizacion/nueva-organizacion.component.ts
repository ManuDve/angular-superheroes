import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from 'src/app/shared/validators/validators';
import { OrganizacionService } from '../../services/organizacion.service';
import { Organizacion } from '../../interfaces/organizacion.interface';

@Component({
  selector: 'entidades-nueva-organizacion',
  templateUrl: './nueva-organizacion.component.html',
  styleUrls: ['./nueva-organizacion.component.css']
})
export class NuevaOrganizacionComponent {
  public organizacionForm: FormGroup = this.fb.group({
    nombre:   ['', [Validators.required, Validators.minLength(4)]],
    publico:  [false],
    fecha: ['', [Validators.required, Validators.pattern(customValidators.patronFecha)]]
  });

  isValidField(field:string): boolean | null{
    return !this.organizacionForm.controls[field].errors && !this.organizacionForm.controls[field].pristine
  }

  getFieldError(field:string, error:string) :boolean | null {
    return this.organizacionForm.controls[field].getError(error)
  }


  constructor (
    private fb: FormBuilder,
    private organizacionService: OrganizacionService
    ){}

  onSubmit(nombreOrg: string, fechaOrg: string, publicoOrg: boolean):void {
    if (this.organizacionForm.invalid) return;
    const nuevaOrganizacion = {id: null, nombre: nombreOrg, publico: publicoOrg, fecha: fechaOrg}
    this.organizacionService.createOrganizacion(nuevaOrganizacion);
    this.organizacionForm.reset();
  }
}
