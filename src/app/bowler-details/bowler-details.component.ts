import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bowler-details',
  templateUrl: './bowler-details.component.html',
  styleUrls: ['./bowler-details.component.css']
})
export class BowlerDetailsComponent implements OnInit {
  bowlerId : number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.bowlerId = id;
  }

}
