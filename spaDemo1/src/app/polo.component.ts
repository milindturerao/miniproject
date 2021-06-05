import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'polo',
  templateUrl: './polo.component.html',
  styles: [
  ]
})
export class PoloComponent implements OnInit {
polo:string
  constructor(private route:ActivatedRoute) {
    this.polo = this.route.snapshot.params["p_id"]+"....."+this.route.snapshot.params["p_name"]+"....."+this.route.snapshot.params["p_cost"];

  }

  ngOnInit(): void {
  }

}
