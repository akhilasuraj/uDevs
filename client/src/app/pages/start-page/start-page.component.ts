import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  type:string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.type=params['type'];
    });
  }

  

}
