import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { LoadJsonServiceService } from '../load-json-service.service';
import { Observable } from "rxjs";
import { map, mapTo } from "rxjs/operators";
import { BarGraph } from '../models/bargraph.model';



@Component({
  selector: 'app-d3-graph1',
  templateUrl: './d3-graph1.component.html',
  styleUrls: ['./d3-graph1.component.scss']
})
export class D3Graph1Component implements OnInit {
  data: BarGraph;
  // D3 codes are as per the latest version 6
  constructor(private loadJsonService: LoadJsonServiceService) { }
  // domain is input and range is output    domain is input between a bound  and range is output bettween a bound given a domin 
  ngOnInit() {
    this.loadJsonService.getJson()
      .subscribe(data => this.data = data)

    console.log(this.data);
    this.createGraph();
  }

  createGraph() {
    var margin = { top: 20, right: 20, bottom: 100, left: 100 },
      width = 800 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      x = d3.scaleBand().rangeRound([0, width]).padding(0.5),
      y = d3.scaleLinear().rangeRound([height, 0]);

    //draw axis
    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y).ticks(5)
      .tickSizeInner(-width)
      .tickSizeOuter(0)
      .tickPadding(10);

    // draw Svg
    var svg = d3.select(".svgContainer")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //Reading Json Data and appending data to the graph


    /*  d3.json("this.data",function(error, data) {
      x.domain(data.map(function (d)
      {
          return d.name;
      }));
    
      y.domain([0, d3.max(data, function (d)
      {
          return d.rank;
      })]);
    
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0, " + height + ")")
          .call(xAxis)
          .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-0.5em")
          .attr("dy", "-.55em")
          .attr("y", 30)
          .attr("transform", "rotate(-45)" );
    
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 5)
          .attr("dy", "0.8em")
          .attr("text-anchor", "end")
          .text("Member Rank");
    
      svg.selectAll("bar")
          .data(data)
          .enter()
          .append("rect")
          .style("fill", "orange")
          .attr("x", function(d)
          {
              return x(d.name);
          })
          .attr("width", x.rangeBand())
          .attr("y", function (d)
          {
              return y(d.rank);
          })
          .attr("height", function (d)
          {
              return height - y(d.rank);
          })
          .on("mouseover", function ()
          {
              tooltip.style("display", null);
          })
          .on("mouseout", function ()
          {
              tooltip.style("display", "none");
          })
          .on("mousemove", function (d)
          {
              var xPos    = d3.mouse(this)[0] - 55;
              var yPos    = d3.mouse(this)[1] - 55;
              tooltip.attr("transform", "translate(" + xPos + "," + yPos + ")");
              tooltip.select("text").text("Name: " + d.name + " : Rank: " + d.rank);
          });
    
      var tooltip     = svg.append("g")
          .attr("class", "tooltip")
          .style("display", "none");
    
      tooltip.append("text")
          .attr("x", 15)
          .attr("dy", "1.2em")
          .style("text-anchor", "middle")
          .attr("font-size", "1.5em")
          .attr("font-weight", "bold");
    }
    
    });  */
  }

}
