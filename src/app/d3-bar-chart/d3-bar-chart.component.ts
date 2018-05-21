import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class D3BarChartComponent implements OnInit{

  constructor( ) {
}
 
/* View encapsulation is necessary here because the style we give to our d3 created elements
*  will directly affect the DOM so to give scoped style or style specific to our component we
* can take the help of encapsulation property in our @Component Decorator which won't leak style to other
* component and will keep the style to itself
*/
  ngOnInit() {
    
    var data=[12,35,47,68,94];
    var width=600,
     scaleFactor=5,
     barHeight=30;
    var graph= d3.select(".barChart")// never give the body or header like tags that are common to other componenents
                                     // as D3 directly manipulates the DOM which will be affect to other 
                                    // components also .. Angular is a Single page Application and D3 directly 
                                    // manipultes dom so they may interfere each other so always select an element
                                    // of specfic class or id type 
               .append("svg")
               .attr("width",width)
               .attr("height",barHeight*data.length);
    var bar= graph.selectAll("g")
                 .data(data)
                 .enter()
                 .append("g")
                 .attr("transform",function(d,i){
                   return "translate(0,"+ i*barHeight+")";
                 });
    bar.append("rect")
      .attr("width", function(d){
        return d*scaleFactor;
           })
      .attr("height",barHeight-1);
    bar.append("text")
       .attr("x", function(d) { return (d*scaleFactor); })
       .attr("y", barHeight / 2)
       .attr("dy", ".35em")
       .text(function(d) { return d; });

   console.log(d3);
}
ngOnDestroy(){
  console.log("ng destroy called");
  
   }
  ngAfterContentInit(){
   
    
}
}