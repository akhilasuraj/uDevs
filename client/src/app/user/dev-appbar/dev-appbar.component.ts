import { Component, OnInit } from '@angular/core';
import { AuthenticationService, developerID } from '../authentication.service';
import { Router } from '@angular/router';
import * as socketIo from 'socket.io-client';

import { Subscription, timer, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dev-appbar',
  templateUrl: './dev-appbar.component.html',
  styleUrls: ['./dev-appbar.component.css']
})
export class DevAppbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  developer_data: developerID = {
    developer_ID: this.auth.getUserDetails().id
  }

  countRequestDeveloper: number = null
  countAccBidReq: number = null
  countAccProReq: number = null
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  totalCount:number = 0


  ngOnInit() {


    this.subscription1 = timer(0, 1000).pipe(
      switchMap(() => this.auth.countRequestDeveloper(this.developer_data))
    ).subscribe(
      result => {
        this.countRequestDeveloper = result
        this.totalCount = this.totalCount + result
      },
      err => {
        console.log(err)
      }
    )


    this.subscription2 = timer(0, 1000).pipe(
      switchMap(() => this.auth.countAcceptBidReq(this.developer_data))
    ).subscribe(
      result => {
        this.countAccBidReq = result
        this.totalCount = this.totalCount + result
      },
      err => {
        console.log(err)
      }
    )


    this.subscription3 = timer(0, 1000).pipe(
      switchMap(() => this.auth.countAcceptProReq(this.developer_data))
    ).subscribe(
      result => {
        this.countAccProReq = result
        this.totalCount = this.totalCount + result
      },
      err => {
        console.log(err)
      }
    )


  }


  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  logout() {
    if(window.confirm("Do you want to logout")){
    this.auth.logout()
    }
  }

}
