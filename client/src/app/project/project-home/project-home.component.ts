import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../user/authentication.service';
import { Router } from '@angular/router';
import {  AuthProjectService, ProjectPayload, ProjectDetails} from '../auth-project.service'

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  wholeMarked = true
  marked = true
  marked1 = true
  marked2 = true
  marked3 = true

  constructor(private authPro: AuthProjectService, private router: Router, private auth: AuthenticationService) { }

 projects: ProjectDetails
 Conf_projects: ProjectDetails
 Comp_projects: ProjectDetails

  ngOnInit() {

    this.marked = true
    if(window.localStorage.getItem('usertoken')){
    this.authPro.viewAllCurrentProject().subscribe(
      project => {
        if(project[0].id > 0){
          this.projects = project
          this.marked1 = false
        }else{
          this.marked1 = true 

        }
      },
      err => {
        console.error(err)
      }
    )

    this.authPro.viewAllConfiremedProject().subscribe(
      project =>{
        console.log(project)
        if(project != ""){        
          this.Conf_projects = project
          this.marked2 = false
        }else{
          this.marked2 = true 
        }
      },
      err => {
        console.error(err)
      }
    )
    
    this.authPro.viewAllCompletedProject().subscribe(
      project =>{
        console.log(project)
        if(project != ""){
          this.Comp_projects = project
          this.marked3 = false
        }else{
          this.marked3 = true 
        }
      },
      err => {
        console.error(err)
      }
    )




    }else{
      this.router.navigateByUrl("/home/login")
    }
  }

  AddProject(){
    this.marked = false
  }

  projectDetails={
    project_ID:0
  }

  onClick(projectID:number){
    this.projectDetails.project_ID = projectID
    this.wholeMarked = false
  }

}
