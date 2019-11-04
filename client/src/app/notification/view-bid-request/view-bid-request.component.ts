import { Component, OnInit } from '@angular/core';
import { AuthNotificationService, viewCliReq } from '../auth-notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { bidResponseDetails } from 'src/app/home/auth-home.service';
import { CliViewNotificationComponent } from '../cli-view-notification/cli-view-notification.component';

@Component({
  selector: 'app-view-bid-request',
  templateUrl: './view-bid-request.component.html',
  styleUrls: ['./view-bid-request.component.css']
})
export class ViewBidRequestComponent implements OnInit {


  request_data:viewCliReq={
    notification_ID:0,
    client_ID:0
  }

  Not_details:bidResponseDetails
  
  constructor(
    private authNot: AuthNotificationService, 
    private auth: AuthenticationService, 
    private route: ActivatedRoute,
    private cliNot: CliViewNotificationComponent,
    private router: Router,
    ) { }

  ngOnInit() {

    this.request_data.client_ID = this.auth.getUserDetails().id

      this.request_data.notification_ID = this.cliNot.bidNot_ID

    this.authNot.viewBidResponse(this.request_data).subscribe(
      res=>{
        this.Not_details = res
      }
    )
  }


    BackToNotification(){
    }

    goToProject( Pro_id){
      this.router.navigateByUrl('/cliCatagory/project')
    }
}
