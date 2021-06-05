import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pants',
  templateUrl: './pants.component.html',
  styles: [
  ]
})
export class PantsComponent implements OnInit {
pants:string;
  constructor(private route:ActivatedRoute) {
    this.pants = this.route.snapshot.params["p_id"]+"....."+this.route.snapshot.params["p_name"]+"....."+this.route.snapshot.params["p_cost"];

   }

  ngOnInit(): void {
  }

}
