import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'summer',
  templateUrl: './summer.component.html',
  styles: [
  ]
})
export class SummerComponent implements OnInit {
summer:string;
  constructor(private route:ActivatedRoute) {
    this.summer = this.route.snapshot.params["p_id"]+"....."+this.route.snapshot.params["p_name"]+"....."+this.route.snapshot.params["p_cost"];
  }

  ngOnInit(): void {
  }

}
