import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../user/authentication.service';
import { AuthNotificationService, developerID } from 'src/app/notification/auth-notification.service';
import { requestDeveloperDetails } from 'src/app/home/auth-home.service';


@Component({
  selector: 'app-dev-notification',
  templateUrl: './dev-notification.component.html',
  styleUrls: ['./dev-notification.component.css']
})
export class DevNotificationComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, private authNot: AuthNotificationService) { }

  developer_data:developerID={
    developer_ID: 0
  }

  requestNotificationNew:requestDeveloperDetails
  requestNotificationOld:requestDeveloperDetails
  accProReqNew
  accProReqOld
  accBidReqNew
  accBidReqOld

  marked1:boolean = false
  marked2:boolean = false
  view:boolean = true
  view1:boolean = false
  view2:boolean = false
  view3:boolean = false

  ngOnInit() {

    this.developer_data.developer_ID=this.auth.getUserDetails().id

    this.authNot.newAllRequestDeveloper(this.developer_data).subscribe(
      request=>{
        if(request!=''){
        this.requestNotificationNew=request
        this.marked1=true
        }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.oldAllRequestDeveloper(this.developer_data).subscribe(
      request=>{
        if(request!=''){
        this.requestNotificationOld=request
        this.marked2=true
        }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.newAllAcceptProReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accProReqNew=result
          this.marked1=true
          }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.oldAllAcceptProReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accProReqOld=result
          this.marked2=true
          }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.newAllAcceptBidReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accBidReqNew=result
          this.marked1=true
          }
      },
      err=>{
        console.log(err)
      }
    )


    this.authNot.oldAllAcceptBidReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accBidReqOld=result
          this.marked2=true
          }
      },
      err=>{
        console.log(err)
      }
    )
  }


  accNot_ID: number;
  bidNot_ID: number;
  cliNot_ID: number;


  viewAccProReq(not_ID:number){
    this.accNot_ID = not_ID
    this.view = false
    this.view1 = true
    this.view2 = false
    this.view3 = false
  }

  viewAccBidReq(not_ID:number){
    this.bidNot_ID = not_ID
    this.view = false
    this.view1 = false
    this.view2 = true
    this.view3 = false
  }

  viewClientRequest(not_ID:number){
    this.cliNot_ID = not_ID
    this.view = false
    this.view1 = false
    this.view2 = false
    this.view3 = true
  }


}
