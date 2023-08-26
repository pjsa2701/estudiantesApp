import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-prom-estudiantes',
  templateUrl: './prom-estudiantes.component.html',
  styleUrls: ['./prom-estudiantes.component.css']
})
export class PromEstudiantesComponent implements OnInit {
  promedioEstudiantes: number = 0;

  constructor(private estudiantesService: EstudiantesService, private router:Router) { }

  ngOnInit(): void {
    this.calcularPromedio();
  }

  calcularPromedio(): void {
    const totalEstudiantes = this.estudiantesService.listaEstudiantes.length;
    if (totalEstudiantes > 0) {
      const sumPromedios = this.estudiantesService.listaEstudiantes.reduce((acc, estudiante) => {
        return acc + estudiante.promedio;
      }, 0);
      this.promedioEstudiantes = sumPromedios / totalEstudiantes;
    } else {
      this.promedioEstudiantes = 0;
    }
  }

  redirectToEstudiantes() {
    this.router.navigate(['/estudiantes']);
  }


}

