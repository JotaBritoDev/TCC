import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesGridComponent } from './pacientes-grid.component';

describe('PacientesGridComponent', () => {
  let component: PacientesGridComponent;
  let fixture: ComponentFixture<PacientesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
