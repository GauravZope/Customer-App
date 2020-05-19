import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMstListComponent } from './country-mst-list.component';

describe('CountryMstListComponent', () => {
  let component: CountryMstListComponent;
  let fixture: ComponentFixture<CountryMstListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryMstListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
