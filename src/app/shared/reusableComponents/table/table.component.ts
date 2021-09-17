import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TableColumn } from '../../models/tableColumn';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: any[];

  @Input() tests : any;
  @Input() odis : any;
  @Input() t20s : any; 
  
  @Input() tableColumns : TableColumn[];

  @Input() ifTestRanking : boolean;
  @Input() ifOdiRanking : boolean;
  @Input() ifT20Ranking : boolean;

  @Input() set tableData(data: any[]){
    this.setTableDataSource(data);
  }
  
setTableDataSource(data){
  this.tableDataSource= new MatTableDataSource(data);
}

  constructor() { }

  ngOnInit() {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.dataKey);
    this.displayedColumns = columnNames;
    console.log('tests', this.tests);

    //  this.displayedColumns=  this.displayedColumns.map(col => col.name);
  }
  

}
