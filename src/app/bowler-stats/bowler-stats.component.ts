import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CricketService } from '../shared/services/cricket.service';

@Component({
  selector: 'app-bowler-stats',
  templateUrl: './bowler-stats.component.html',
  styleUrls: ['./bowler-stats.component.css']
})
export class BowlerStatsComponent implements OnInit {
  bowlerStats : any;

  constructor(private service : CricketService,
              private router : Router) { }

  ngOnInit() {
    this.service.getBowlerStats()
      .subscribe(response => {
        this.bowlerStats = response;
      })
  }

  toBowlerDetails(bowlerStat) {
     this.router.navigate(['/bowler', bowlerStat.id])
  }
}
