import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3Chart1Component } from './d3-chart1.component';

describe('D3Chart1Component', () => {
  let component: D3Chart1Component;
  let fixture: ComponentFixture<D3Chart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3Chart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3Chart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
