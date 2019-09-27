import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthHomeService, ViewDeveloperObject , requestDeveloperDetails} from '../auth-home.service'
import { AuthenticationService,UserDetails, skillDetails } from '../../user/authentication.service';
import { AuthProjectService, ProjectDetails } from '../../project/auth-project.service';
import { CliHomeComponent } from '../cli-home/cli-home.component';

@Component({
  selector: 'app-cli-view-dev',
  templateUrl: './cli-view-dev.component.html',
  styleUrls: ['./cli-view-dev.component.css']
})

export class CliViewDevComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private authHome: AuthHomeService, 
    private auth: AuthenticationService, 
    private authPro: AuthProjectService,
    private cliHome: CliHomeComponent) { }

  viewdetails: ViewDeveloperObject={
    user_ID: 0,
    skill_ID : 0
  }

  developer:UserDetails
  technos
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

  details={
    user_ID: 0
  }

  ngOnInit() {

    this.details.user_ID = this.cliHome.userID
    console.log(this.cliHome.userID)

    this.authHome.cli_getDeveloper(this.details).subscribe(
      user=>{
        this.developer=user
        console.log(this.developer)
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.cli_getTechno(this.details).subscribe(
      techno=>{
        this.technos=techno
      },
      err => {
        console.error(err)
      }
    )

    this.authPro.viewAllCurrentProject().subscribe(
      project =>{
        this.projects = project
      },
      err => {
        console.error(err)
      }
    )

  }


  requestDeveloper(){

    this.credentials.client_ID = this.auth.getUserDetails().id

    
      this.credentials.developer_ID = this.cliHome.userID
    


    this.authHome.cli_sendRequest(this.credentials).subscribe(
      request=>{
        this.marked1=false
        this.marked2=true
      },
      err=>{
        console.log(err)
      }
    )
  }

  cancleRequest(project_ID:number){

    this.credentials.client_ID = this.auth.getUserDetails().id

    this.credentials.developer_ID = this.cliHome.userID;

    this.credentials.project_ID = project_ID
    
    this.authHome.cli_cancleRequest(this.credentials).subscribe(
      request=>{

      },
      err=>{
        console.log(err)
      }
    )

  }


  logout(){
    this.auth.logout()
  }

}
