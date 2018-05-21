import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3LineChart1Component } from './d3-line-chart1.component';

describe('D3LineChart1Component', () => {
  let component: D3LineChart1Component;
  let fixture: ComponentFixture<D3LineChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3LineChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3LineChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
