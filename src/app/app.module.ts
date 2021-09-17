import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { TeamRankingsComponent } from './team-rankings/team-rankings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomeComponent } from './home/home.component';
import { BatsmanStatsComponent } from './batsman-stats/batsman-stats.component';
import { BowlerStatsComponent } from './bowler-stats/bowler-stats.component';
import { BatsmanDetailsComponent } from './batsman-details/batsman-details.component';
import { BowlerDetailsComponent } from './bowler-details/bowler-details.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableComponent } from './shared/reusableComponents/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamRankingsComponent,
    StatisticsComponent,
    HomeComponent,
    BatsmanStatsComponent,
    BowlerStatsComponent,
    BatsmanDetailsComponent,
    BowlerDetailsComponent,
    SideNavComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    HighchartsChartModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
