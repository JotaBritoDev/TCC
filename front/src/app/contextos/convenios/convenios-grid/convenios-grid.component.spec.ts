import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosGridComponent } from './convenios-grid.component';

describe('ConveniosGridComponent', () => {
  let component: ConveniosGridComponent;
  let fixture: ComponentFixture<ConveniosGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveniosGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
