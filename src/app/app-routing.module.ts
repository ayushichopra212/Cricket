import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatsmanDetailsComponent } from './batsman-details/batsman-details.component';
import { BowlerDetailsComponent } from './bowler-details/bowler-details.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TeamRankingsComponent } from './team-rankings/team-rankings.component';


const routes: Routes = [
  { path: '', component: StatisticsComponent},
  // { path: 'sidenav', component: SideNavComponent},
  { path: 'ranking', component: TeamRankingsComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'batsman', component: BatsmanDetailsComponent},
  { path: 'batsman/:id', component: BatsmanDetailsComponent},
  { path: 'bowler', component: BowlerDetailsComponent},
  { path: 'bowler/:id', component: BowlerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
