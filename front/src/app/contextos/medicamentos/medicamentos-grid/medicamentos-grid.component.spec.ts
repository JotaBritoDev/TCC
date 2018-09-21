import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosGridComponent } from './medicamentos-grid.component';

describe('MedicamentosGridComponent', () => {
  let component: MedicamentosGridComponent;
  let fixture: ComponentFixture<MedicamentosGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
