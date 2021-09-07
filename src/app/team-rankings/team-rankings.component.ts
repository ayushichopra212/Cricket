import { Component, OnInit } from '@angular/core';
import { CricketService } from '../shared/services/cricket.service';

@Component({
  selector: 'app-team-rankings',
  templateUrl: './team-rankings.component.html',
  styleUrls: ['./team-rankings.component.css']
})
export class TeamRankingsComponent implements OnInit {
  odis : any;
  tests : any;
  t20s : any;

  ifTestRanking : boolean = false
  ifOdiRanking : boolean = false
  ifT20Ranking : boolean = false

  dataSource : any;
  displayedColumns: string[] = ['id', 'Country', 'Points', 'Ratings'];

  constructor(private service: CricketService) { }

  ngOnInit() {
  }

  showTestRanking() {
    this.service.getTestRanking()
      .subscribe(response => {
        this.tests = response;
        console.log(this.tests);
        this.dataSource = this.tests;

        this.ifTestRanking = true;
        this.ifOdiRanking = false;
        this.ifT20Ranking = false;
      })
  }

  showOdiRanking() {
    this.service.getOdiRanking()
      .subscribe(response => {
        this.odis = response;
        console.log(this.odis);
        this.dataSource = this.odis;

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

        this.ifTestRanking = false;
        this.ifOdiRanking = false;
        this.ifT20Ranking = true;
      })
  }
}
