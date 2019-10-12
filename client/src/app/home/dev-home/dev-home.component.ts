import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service'
import { ProjectDetails } from '../../project/auth-project.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-home',
  templateUrl: './dev-home.component.html',
  styleUrls: ['./dev-home.component.css']
})
export class DevHomeComponent implements OnInit {

  constructor(private authHome: AuthHomeService,private router: Router,) { }

  designProject: ProjectDetails
  webProject: ProjectDetails
  writingProject: ProjectDetails
  dataProject: ProjectDetails
  otherProject: ProjectDetails

  marked = true

  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 7, name:'Flash'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ]

  project_ID

  ngOnInit() {
      this.authHome.webProject().subscribe(
        project=>{
            this.webProject = project
        },
        err => {
          console.error(err)
        }
      )

  }


  viewProject(projectID){
    this.project_ID = projectID
    this.marked = false
  }

}
