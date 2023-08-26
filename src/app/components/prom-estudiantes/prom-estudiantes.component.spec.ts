import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromEstudiantesComponent } from './prom-estudiantes.component';

describe('PromEstudiantesComponent', () => {
  let component: PromEstudiantesComponent;
  let fixture: ComponentFixture<PromEstudiantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromEstudiantesComponent]
    });
    fixture = TestBed.createComponent(PromEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
