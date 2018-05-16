import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BaseChartComponent, ColorHelper } from '@swimlane/ngx-charts';
import * as d3 from 'd3';
import * as chartsData from './ngx-charts.config';
import { lineChartMulti} from './ngxChart';


@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataChartComponent extends BaseChartComponent implements OnInit {
  
  ngOnInit(): void {
    Object.assign(this, { lineChartMulti })
  }
  lineChartMulti = lineChartMulti;
    //Line Charts
    
    lineChartView: any[] = chartsData.lineChartView;

    // options
    lineChartShowXAxis = chartsData.lineChartShowXAxis;
    lineChartShowYAxis = chartsData.lineChartShowYAxis;
    lineChartGradient = chartsData.lineChartGradient;
    lineChartShowLegend = chartsData.lineChartShowLegend;
    lineChartShowXAxisLabel = chartsData.lineChartShowXAxisLabel;
    lineChartXAxisLabel = chartsData.lineChartXAxisLabel;
    lineChartShowYAxisLabel = chartsData.lineChartShowYAxisLabel;
    lineChartYAxisLabel = chartsData.lineChartYAxisLabel;

    lineChartColorScheme = chartsData.lineChartColorScheme;

    // line, area
    lineChartAutoScale = chartsData.lineChartAutoScale;
    lineChartLineInterpolation = chartsData.lineChartLineInterpolation;
    
   


    onSelect(event) {
        console.log(event);
    }
}