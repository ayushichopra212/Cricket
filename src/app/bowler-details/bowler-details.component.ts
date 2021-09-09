import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Highcharts from 'highcharts';
import { CricketService } from '../shared/services/cricket.service';

@Component({
  selector: 'app-bowler-details',
  templateUrl: './bowler-details.component.html',
  styleUrls: ['./bowler-details.component.css']
})
export class BowlerDetailsComponent implements OnInit {
  bowlerId : number;
  bowlerDetails : any;
  Highcharts = Highcharts;
  barGraphChart : {} ={};
  pieChart : {} ={};

  constructor(private route : ActivatedRoute,
              private cricketService : CricketService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.bowlerId = id;
    this.getBowlerDetails(id);
  }

  getBowlerDetails(id: number) {
    this.cricketService.getBowlerDetails()
      .subscribe(response => {
        this.bowlerDetails = response;
        console.log(this.bowlerDetails);
        for (let bowlerDetail of this.bowlerDetails) {
          if (this.bowlerId == bowlerDetail.id) {
            this.displayBarGraph(bowlerDetail);
            this.displayPieChart(bowlerDetail);
          }
        }
      })
  }

  displayBarGraph(bowlerDetail) {
    this.barGraphChart = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Runs year wise'
      },
      subtitle: {
        text: bowlerDetail.name
      },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      },
      xAxis: {
        categories: [bowlerDetail.a2, bowlerDetail.b2, bowlerDetail.c2, bowlerDetail.d2],
        labels: {
          x: -10
        }
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Runs'
        }
      },
      series: [{
        name: 'Runs',
        data: [bowlerDetail.a, bowlerDetail.b, bowlerDetail.c, bowlerDetail.d],
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }
  }

  displayPieChart(bowlerDetail) {
    this.pieChart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Wickets against Top Distribution'
      },
      tooltip: {
        pointFormat: '{series.name} : <b> {point.percentage:.1f}% </b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b> {point.name}</b> : {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Australia',
          y: bowlerDetail.Australia,
        }, {
          name: 'Bangladesh',
          y: bowlerDetail.Bangladesh,
        }, {
          name: 'England',
          y: bowlerDetail.England,
        }, {
          name: 'Pakistan',
          y: bowlerDetail.Pakistan,
        }, {
          name: 'South Africa',
          y: bowlerDetail.SouthAfrica,
        }, {
          name: 'Sri Lanka',
          y: bowlerDetail.SriLanka,
        }, {
          name: 'West Indies',
          y: bowlerDetail.WestIndies,
        }, {
          name: 'India',
          y: bowlerDetail.India,
        },
        ]
      }]
    }
  }
}
