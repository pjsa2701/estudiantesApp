import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromEstudiantesComponent } from './components/prom-estudiantes/prom-estudiantes.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

const routes:Routes = [
  {path:'', redirectTo: 'estudiantes', pathMatch: 'full'},
  {path:'estudiantes', component: EstudiantesComponent},
  {path:'promedioEstudiantes', component: PromEstudiantesComponent},
  {path:'**', redirectTo: 'estudiantes', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [PromEstudiantesComponent, EstudiantesComponent]
