import { NgModule } from '@angular/core';
import { OrganizacionesComponent } from './components/organizaciones/organizaciones.component';
import { OrganizacionesPageComponent } from './pages/organizaciones-page.component';
import { CommonModule } from '@angular/common';
import { NuevaOrganizacionComponent } from './components/nueva-organizacion/nueva-organizacion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrganizacionesComponent, OrganizacionesPageComponent, NuevaOrganizacionComponent],
  exports: [OrganizacionesComponent, OrganizacionesPageComponent, NuevaOrganizacionComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class EntidadesModule { }
