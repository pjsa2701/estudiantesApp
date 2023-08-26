import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  cedula = "";
  nombre = "";
  apellido = "";
  asignatura = "";
  nota1 = 0;
  nota2 = 0;

  //CHECKBOX
  filtroEstado = "TODO";

  //RADIO-BUTTON
  seleccionRadioButton = 'TODO';

  constructor(public estudiantesService: EstudiantesService, private router: Router) { }

  ngOnInit(): void {}

  agregarEstudiante(): void {
    const promedio = (this.nota1 + this.nota2) / 2;
    const estado = promedio >= 7 ? "Aprobado" : "Reprobado";

    const estudiante: Estudiante = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      asignatura: this.asignatura,
      nota1: this.nota1,
      nota2: this.nota2,
      promedio: promedio,
      estado: estado,
    }

    this.estudiantesService.listaEstudiantes.push(estudiante);
    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.asignatura = '';
    this.nota1 = 0;
    this.nota2 = 0;
  }

  //Métodos para los CheckBox

  eliminarEstudiante(indice: number): void {
    this.estudiantesService.listaEstudiantes.splice(indice, 1);
  }

  filtrarEstudiantes(): Estudiante[] {
    if (this.filtroEstado === "TODO") {
      return this.estudiantesService.listaEstudiantes;
    } else {
      return this.estudiantesService.listaEstudiantes.filter(estudiante => estudiante.estado === this.filtroEstado);
    }
  }

  redirectToPromedioEstudiantes() {
    this.router.navigate(['/promedioEstudiantes']);
  }

  //De aquí en adelante están los métodos con los cuales trabajará el componente radio-buttons

  totalEstudiantes(): number {
    return this.estudiantesService.listaEstudiantes.filter((student: Estudiante) => {
      return student.estado === 'Aprobado' || student.estado === 'Reprobado';
    }).length;
  }

  totalAprobados(): number {
    return this.estudiantesService.listaEstudiantes.filter((student: Estudiante) => {
      return student.estado === 'Aprobado';
    }).length;
  }

  totalReprobados(): number {
    return this.estudiantesService.listaEstudiantes.filter((student: Estudiante) => {
      return student.estado === 'Reprobado';
    }).length;
  }

  contadorEstudiantesButtonChange(seleccion: string): void {
    this.seleccionRadioButton = seleccion;
  }
}
