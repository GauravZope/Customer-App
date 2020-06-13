import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMstListComponent } from './state-mst-list.component';

describe('StateMstListComponent', () => {
  let component: StateMstListComponent;
  let fixture: ComponentFixture<StateMstListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateMstListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
