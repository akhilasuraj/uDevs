import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service'
import { ProjectDetails } from '../../project/auth-project.service'
import { Router } from '@angular/router';
import { DevAllComponent } from '../dev-all/dev-all.component'

@Component({
  selector: 'app-dev-home',
  templateUrl: './dev-home.component.html',
  styleUrls: ['./dev-home.component.css']
})
export class DevHomeComponent implements OnInit {
  webProject: any
  mobProject: any;
  dataProject: any;
  softProject: any;
  blockchain: any;
  machlearn: any;
  natlang: any;
  digimark: any;
  multiDesign: any;
  robot: any;
  

  constructor(private authHome: AuthHomeService,private router: Router,) { }


  


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
NO:0;
  ngOnInit() {
      this.authHome.webProject().subscribe(
        project=>{
            this.webProject = project
        },
        err => {
          console.error(err)
        }
      )

      this.authHome.mobProject().subscribe(
        project=>{
            this.mobProject = project
        },
        err => {
          console.error(err)
        }
      )

      this.authHome.dataProject().subscribe(
        project=>{
            this.dataProject = project
        },
        err => {
          console.error(err)
        }
      )

      this.authHome.softProject().subscribe(
        project=>{
            this.softProject = project
        },
        err => {
          console.error(err)
        }
      )

      this.authHome.blockchain().subscribe(
        project=>{
            this.blockchain = project
        },
        err => {
          console.error(err)
        }
      )


      this.authHome.machlearn().subscribe(
        project=>{
            this.machlearn = project
        },
        err => {
          console.error(err)
        }
      )


      this.authHome.natlang().subscribe(
        project=>{
            this.natlang = project
        },
        err => {
          console.error(err)
        }
      )


      this.authHome.digimark().subscribe(
        project=>{
            this.digimark = project
        },
        err => {
          console.error(err)
        }
      )


      this.authHome.multiDesign().subscribe(
        project=>{
            this.multiDesign = project
        },
        err => {
          console.error(err)
        }
      )


      this.authHome.robot().subscribe(
        project=>{
            this.robot = project
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
 viewMore(no){
  this.NO=no;
  this.router.navigate(['/devCatagory/all'],{queryParams:{xx:this.NO}})
  console.log("xx"+this.NO)
 }

}
