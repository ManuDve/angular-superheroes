import { NgModule } from '@angular/core';
import { OrganizacionesComponent } from './components/organizaciones/organizaciones.component';
import { OrganizacionesPageComponent } from './pages/organizaciones-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OrganizacionesComponent, OrganizacionesPageComponent],
  exports: [OrganizacionesComponent, OrganizacionesPageComponent],
  imports: [CommonModule],
})
export class EntidadesModule { }
