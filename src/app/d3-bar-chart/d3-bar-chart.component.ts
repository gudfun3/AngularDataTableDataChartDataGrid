import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.scss']
})
export class D3BarChartComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    let data = [30, 86, 168, 281, 303, 365];
    d3.select(".chart")
    .selectAll("div")
      .data(data)
        .enter()
        .append("div")
        .style("width", function(d) { return d + "px"; })
        .text(function(d) { return d; });
}
  }
  /* ngAfterContentInit(){
    

} */