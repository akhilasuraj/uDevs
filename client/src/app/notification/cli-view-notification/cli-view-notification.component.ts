import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cli-view-notification',
  templateUrl: './cli-view-notification.component.html',
  styleUrls: ['./cli-view-notification.component.css']
})
export class CliViewNotificationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  view1 = false;
  view2 = false;
  view3 = false

  proNot_ID: number
  bidNot_ID: number
  accNot_ID: number;

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      if (params['type'] == '1') {
        this.proNot_ID = params['not_id']
        this.view1 = true
        this.view2 = false
        this.view3 = false
      } else if (params['type'] == '2') {
        this.bidNot_ID = params['not_id']
        this.view2 = true
        this.view1 = false
        this.view3 = false
      } else if (params['type'] == '3') {
        this.accNot_ID = params['not_id']
        this.view3 = true
        this.view1 = false
        this.view2 = false
      }

    });

  }

}
