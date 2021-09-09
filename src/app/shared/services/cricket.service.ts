import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import testRanking from '../mockData/testRanking.json';
import odiRanking from '../mockData/odiRanking.json';
import t20Ranking from '../mockData/t20Ranking.json';
import batsmanStats from '../mockData/batsmanStats.json';
import bowlerStats from '../mockData/bowlerStats.json';
import batsmanDetails from '../mockData/batsmanDetails.json';
import bowlerDetails from '../mockData/bowlerDetails.json'

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  test : Array<any> = testRanking;
  odi : Array<any> = odiRanking;
  t20 : Array<any> = t20Ranking;
  batsman : Array<any> = batsmanStats;
  bowler : Array<any> = bowlerStats;
  batsmanDetail : Array<any> = batsmanDetails;
  bowlerDetail : Array<any> = bowlerDetails;

  constructor() { }

  getTestRanking() {
    return of(this.test);
  }

  getOdiRanking() {
    return of(this.odi);
  }

  getT20Ranking() {
    return of(this.t20);
  }

  getBatsmanStats() {
    return of(this.batsman);
  }

  getBowlerStats() {
    return of(this.bowler);
  }

  getBatsmanDetails() {
    return of(this.batsmanDetail);
  }

  getBowlerDetails() {
    return of(this.bowlerDetail);
  }
}
