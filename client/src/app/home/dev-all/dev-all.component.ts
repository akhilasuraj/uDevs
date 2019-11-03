import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service';
import { ProjectDetails } from '../../project/auth-project.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-all',
  templateUrl: './dev-all.component.html',
  styleUrls: ['./dev-all.component.css']
})
export class DevAllComponent implements OnInit {
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
  constructor(private authHome: AuthHomeService,private router: Router) { }
  project_ID
  marked = true
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
  back(){
    this.marked = true
  }
}
