import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMstEditComponent } from './country-mst-edit.component';

describe('CountryMstEditComponent', () => {
  let component: CountryMstEditComponent;
  let fixture: ComponentFixture<CountryMstEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryMstEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMstEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
