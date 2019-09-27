import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cli-catagory',
  templateUrl: './cli-catagory.component.html',
  styleUrls: ['./cli-catagory.component.css']
})
export class CliCatagoryComponent implements OnInit {
  type:string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.type=params['type'];
    });
  }


}
