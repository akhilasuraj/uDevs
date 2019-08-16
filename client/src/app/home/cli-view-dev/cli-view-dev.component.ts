import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthHomeService, ViewDeveloperObject , requestDeveloperDetails} from '../auth-home.service'
import { AuthenticationService,UserDetails, skillDetails } from '../../user/authentication.service';
import { AuthProjectService, ProjectDetails } from '../../project/auth-project.service';

@Component({
  selector: 'app-cli-view-dev',
  templateUrl: './cli-view-dev.component.html',
  styleUrls: ['./cli-view-dev.component.css']
})
export class CliViewDevComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authHome: AuthHomeService, private auth: AuthenticationService, private authPro: AuthProjectService) { }

  viewdetails: ViewDeveloperObject={
    user_ID: 0,
    skill_ID : 0
  }

  developer:UserDetails
  skills: skillDetails
  projects: ProjectDetails
  requested_developers: requestDeveloperDetails

  type: string

  web = false
  design = false
  writing = false
  data = false


  credentials:requestDeveloperDetails={
    client_ID:0,
    project_ID:0,
    developer_ID:0,
    isViewed: false,
    isAccepted: false
  }

  marked1 = true
  marked2 = false

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.viewdetails.user_ID = params['user_id'];
      this.viewdetails.skill_ID = params['skill_id'];
      this.type = params['type_id'];

      this.authHome.cli_getDeveloper(this.viewdetails).subscribe(
        user=>{
          this.developer=user
        },
        err => {
          console.error(err)
        }
      )

      this.authHome.cli_getSkill(this.viewdetails).subscribe(
        skill=>{
          this.skills=skill
        },
        err => {
          console.error(err)
        }
      )
    })


    if(this.type=='1')
      this.web = true
    if(this.type=='2')
      this.design = true
    if(this.type=='3')
      this.writing = true
    if(this.type=='4')
      this.data = true


    this.authPro.viewAllProject().subscribe(
      project=>{
        this.projects = project
      },
      err=>{
        console.log(err)
      }
    )


    this.credentials.client_ID = this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.credentials.developer_ID = params['user_id'];
    })
    
    this.authHome.cli_getAllRequest(this.credentials).subscribe(
      request=>{
        this.requested_developers = request
        this.marked1=false
        this.marked2 = true
      },
      err=>{
        console.log(err)
      }
    )

  }


  requestDeveloper(){

    this.credentials.client_ID = this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.credentials.developer_ID = params['user_id'];
    })


    this.authHome.cli_sendRequest(this.credentials).subscribe(
      request=>{
        this.marked1=false
        this.marked2=true
      },
      err=>{
        console.log(err)
      }
    )

    window.location.reload();
  }

  cancleRequest(project_ID:number){

    this.credentials.client_ID = this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.credentials.developer_ID = params['user_id'];
    })

    this.credentials.project_ID = project_ID
    
    this.authHome.cli_cancleRequest(this.credentials).subscribe(
      request=>{

      },
      err=>{
        console.log(err)
      }
    )

    window.location.reload();
  }


  logout(){
    this.auth.logout()
  }

}
