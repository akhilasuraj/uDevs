import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dev-catagory',
  templateUrl: './dev-catagory.component.html',
  styleUrls: ['./dev-catagory.component.css']
})
export class DevCatagoryComponent implements OnInit {
  type:string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.type=params['type'];
    });
  }

}
