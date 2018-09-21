import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasGridComponent } from './consultas-grid.component';

describe('ConsultasGridComponent', () => {
  let component: ConsultasGridComponent;
  let fixture: ComponentFixture<ConsultasGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
