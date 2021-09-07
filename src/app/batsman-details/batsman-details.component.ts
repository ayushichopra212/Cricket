import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CricketService } from '../shared/services/cricket.service';

@Component({
  selector: 'app-batsman-details',
  templateUrl: './batsman-details.component.html',
  styleUrls: ['./batsman-details.component.css']
})
export class BatsmanDetailsComponent implements OnInit {
  batsmanId : number;
  batsmanDetails : any;

  constructor(private route : ActivatedRoute,
              private service : CricketService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.batsmanId = id;
    this.getBatsmanDetails(id);
  }

  getBatsmanDetails(id: number){
    this.service.getBatsmanDetails()
      .subscribe(response => {
        this.batsmanDetails = response;
        console.log(this.batsmanDetails);
        for(let batsmanDetail of this.batsmanDetails)
        if(this.batsmanId == batsmanDetail.id) {
          console.log(batsmanDetail)
        }
      })
  }

}
