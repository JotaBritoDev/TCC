import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosFormComponent } from './medicamentos-form.component';

describe('MedicamentosFormComponent', () => {
  let component: MedicamentosFormComponent;
  let fixture: ComponentFixture<MedicamentosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
