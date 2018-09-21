import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosGridComponent } from './medicos-grid.component';

describe('MedicosGridComponent', () => {
  let component: MedicosGridComponent;
  let fixture: ComponentFixture<MedicosGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
