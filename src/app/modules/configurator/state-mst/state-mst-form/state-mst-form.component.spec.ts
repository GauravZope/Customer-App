import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMstFormComponent } from './state-mst-form.component';

describe('StateMstFormComponent', () => {
  let component: StateMstFormComponent;
  let fixture: ComponentFixture<StateMstFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateMstFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
