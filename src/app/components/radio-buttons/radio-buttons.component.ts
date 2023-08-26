import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css'],
})
export class RadioButtonsComponent {
  @Input() totalEstudiantes: number;
  @Input() totalAprobados: number;
  @Input() totalReprobados: number;
  @Output() contadorChange = new EventEmitter<string>();

  seleccionRadioButton = 'TODO';

  constructor() {
    this.totalEstudiantes = 0;
    this.totalAprobados = 0;
    this.totalReprobados = 0;
  }

  radioButtonChange(): void {
    this.contadorChange.emit(this.seleccionRadioButton);
  }
}
