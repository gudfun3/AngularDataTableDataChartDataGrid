import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3Graph1Component } from './d3-graph1.component';

describe('D3Graph1Component', () => {
  let component: D3Graph1Component;
  let fixture: ComponentFixture<D3Graph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3Graph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3Graph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
