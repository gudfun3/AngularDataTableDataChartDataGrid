import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-d3-chart1',
  templateUrl: './d3-chart1.component.html',
  styleUrls: ['./d3-chart1.component.scss']
})
export class D3Chart1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  radius = 10;

  ngAfterContentInit() {
    d3.select('p').style('color', 'red');
  }

  colorMe() {
    d3.select('button').style('color', 'red');
  }

  clicked(event: any) {
    d3.select(event.target).append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', () => {
        return this.radius;
      })
      .attr('fill', 'red');
  }
}
