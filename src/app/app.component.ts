import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Estudiantes';

  constructor(private router: Router) { }
  redirectToPromedioEstudiantes() {
    this.router.navigate(['/promedioEstudiantes']);
  }

  redirectToEstudiantes() {
    this.router.navigate(['/estudiantes']);
  }
}
