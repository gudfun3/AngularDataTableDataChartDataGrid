import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  @ViewChild('gridOptions') gridOptions: AgGridNg2;
  constructor(private http:HttpClient) {}
  columnDefs = [
    {headerName: 'Make', field: 'make' , checkboxSelection: true },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData :any;

  ngOnInit() {
    this.rowData=this.http.get('https://api.myjson.com/bins/15psn9');
  }
  getSelectedRows() {
    this.agGrid.gridOptions = <GridOptions>{};

    const selectedNodes = this.agGrid.api.getSelectedNodes();
    
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    
}


}
