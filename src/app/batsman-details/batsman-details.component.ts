import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CricketService } from '../shared/services/cricket.service';
import * as Highcharts from 'highcharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-batsman-details',
  templateUrl: './batsman-details.component.html',
  styleUrls: ['./batsman-details.component.css']
})
export class BatsmanDetailsComponent implements OnInit {
  batsmanId: number;
  batsmanDetails: any;
  Highcharts = Highcharts;
  barGraphChart: {} = {};
  pieChart: {} = {};

  @ViewChild ('htmlData', {static: false}) htmlData:ElementRef;

  constructor(private route: ActivatedRoute,
              private cricketService : CricketService) { }
 
  public openPdf() : void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height* fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('cricket-statistics.pdf');
    });
  } 

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.batsmanId = id;
    this.getBatsmanDetails(id);
  }

  getBatsmanDetails(id: number) {
    this.cricketService.getBatsmanDetails()
      .subscribe(response => {
        this.batsmanDetails = response;
        for (let batsmanDetail of this.batsmanDetails) {
          if (this.batsmanId == batsmanDetail.id) {
            this.displayBarGraph(batsmanDetail);
            this.displayPieChart(batsmanDetail);
          }
        }
      })
  }

  displayBarGraph(batsmanDetail) {
    this.barGraphChart = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Runs year wise'
      },
      subtitle: {
        text: batsmanDetail.name
      },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      },
      xAxis: {
        categories: [batsmanDetail.a2, batsmanDetail.b2, batsmanDetail.c2, batsmanDetail.d2],
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
        data: [batsmanDetail.a, batsmanDetail.b, batsmanDetail.c, batsmanDetail.d],
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

  displayPieChart(batsmanDetail) {
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
          y: batsmanDetail.Australia,
        }, {
          name: 'Bangladesh',
          y: batsmanDetail.Bangladesh,
        }, {
          name: 'England',
          y: batsmanDetail.England,
        }, {
          name: 'Pakistan',
          y: batsmanDetail.Pakistan,
        }, {
          name: 'South Africa',
          y: batsmanDetail.SouthAfrica,
        }, {
          name: 'Sri Lanka',
          y: batsmanDetail.SriLanka,
        }, {
          name: 'West Indies',
          y: batsmanDetail.WestIndies,
        }, {
          name: 'India',
          y: batsmanDetail.India,
        },
        ]
      }]
    }
  }

}
