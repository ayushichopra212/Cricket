import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CricketService } from '../shared/services/cricket.service';

@Component({
  selector: 'app-batsman-stats',
  templateUrl: './batsman-stats.component.html',
  styleUrls: ['./batsman-stats.component.css']
})
export class BatsmanStatsComponent implements OnInit {
  batsmanStats : any;

  constructor(private service : CricketService,
              private router : Router) { }

  ngOnInit() {
    this.service.getBatsmanStats()
      .subscribe(response => {
        this.batsmanStats = response;
      })
  }

  toBatsmanDetail(batsmanStat) {
    this.router.navigate(['/batsman', batsmanStat.id])
  }
}
