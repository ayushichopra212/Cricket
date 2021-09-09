import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CricketService } from '../shared/services/cricket.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-team-rankings',
  templateUrl: './team-rankings.component.html',
  styleUrls: ['./team-rankings.component.css']
})
export class TeamRankingsComponent implements OnInit {
  odis : any;
  tests : any;
  t20s : any;

  ifTestRanking : boolean = true
  ifOdiRanking : boolean = false
  ifT20Ranking : boolean = false

  dataSource : any;
  displayedColumns: string[] = ['id', 'Country', 'Points', 'Ratings'];

  @ViewChild('htmlData', {static: false}) htmlData:ElementRef;
  
  @ViewChild(MatSort,{static: false})sort: MatSort; 
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;

  constructor(private service: CricketService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public openPdf() : void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height* fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('cricket-rankings.pdf');
    });
  } 

  ngOnInit() {
    this.service.getTestRanking()
      .subscribe(response => {
        this.tests = response;
        this.dataSource = this.tests;
        this.dataSource = new MatTableDataSource(this.tests);
      })
  }

  showTestRanking() {
    this.service.getTestRanking()
      .subscribe(response => {
        this.tests = response;
        console.log(this.tests);
        this.dataSource = this.tests;
        this.dataSource = new MatTableDataSource(this.tests);

        this.ifTestRanking = true;
        this.ifOdiRanking = false;
        this.ifT20Ranking = false;

        // this.dataSource = new MatTableDataSource(this.tests);
      })
  }

  showOdiRanking() {
    this.service.getOdiRanking()
      .subscribe(response => {
        this.odis = response;
        console.log(this.odis);
        this.dataSource = this.odis;
        this.dataSource = new MatTableDataSource(this.odis);

        this.ifTestRanking = false;
        this.ifOdiRanking = true;
        this.ifT20Ranking = false;
      })
  }

  showT20Ranking() {
    this.service.getT20Ranking()
      .subscribe(response => {
        this.t20s = response;
        console.log(this.t20s);
        this.dataSource = this.t20s;
        this.dataSource = new MatTableDataSource(this.t20s);

        this.ifTestRanking = false;
        this.ifOdiRanking = false;
        this.ifT20Ranking = true;
      })
  }
}
