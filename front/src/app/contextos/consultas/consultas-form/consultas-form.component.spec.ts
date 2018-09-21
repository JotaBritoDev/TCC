import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasFormComponent } from './consultas-form.component';

describe('ConsultasFormComponent', () => {
  let component: ConsultasFormComponent;
  let fixture: ComponentFixture<ConsultasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
