import { Injectable } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  listaEstudiantes: Estudiante[] = [];

  constructor() { }
}
