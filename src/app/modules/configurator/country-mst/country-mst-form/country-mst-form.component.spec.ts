import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMstFormComponent } from './country-mst-form.component';

describe('CountryMstFormComponent', () => {
  let component: CountryMstFormComponent;
  let fixture: ComponentFixture<CountryMstFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryMstFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
