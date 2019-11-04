import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service';
import { ProjectDetails } from '../../project/auth-project.service'
import { Router,ActivatedRoute } from '@angular/router';
import { DevHomeComponent } from '../dev-home/dev-home.component'

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
  load


  constructor(private authHome: AuthHomeService,private router: Router,private devHome:DevHomeComponent,private activateRoute:ActivatedRoute) { }
  project_ID
  no
  marked = true
  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params =>{
      this.no=params['xx'];
    })
  console.log("type:"+this.no)
  if( 1 == this.no){
    this.authHome.webProject().subscribe(
      project=>{
          this.load = project
      },
      err => {
        console.error(err)
      }
    )
  }

  if( 2 == this.no){
    this.authHome.mobProject().subscribe(
      project=>{
          this.load = project
      },
      err => {
        console.error(err)
      }
    )
    }
    
    if( 3 == this.no){
    this.authHome.dataProject().subscribe(
      project=>{
        this.load  = project
      },
      err => {
        console.error(err)
      }
    )
    }

    if( 4 == this.no){
    this.authHome.softProject().subscribe(
      project=>{
        this.load  = project
      },
      err => {
        console.error(err)
      }
    )
    }

    if( 5 == this.no){
    this.authHome.blockchain().subscribe(
      project=>{
        this.load  = project
      },
      err => {
        console.error(err)
      }
    )
    }

    if( 6 == this.no){

    this.authHome.machlearn().subscribe(
      project=>{
        this.load  = project
      },
      err => {
        console.error(err)
      }
    )
    }

    if( 7 == this.no){
    this.authHome.natlang().subscribe(
      project=>{
        this.load  = project
      },
      err => {
        console.error(err)
      }
    )
    }

    if( 8 == this.no){
    this.authHome.digimark().subscribe(
      project=>{
        this.load = project
      },
      err => {
        console.error(err)
      }
    )
    }

    if( 9 == this.no){
    this.authHome.multiDesign().subscribe(
      project=>{
        this.load  = project
      },
      err => {
        console.error(err)
      }
    )
    }

    if( 10 == this.no){
    this.authHome.robot().subscribe(
      project=>{
        this.load = project
      },
      err => {
        console.error(err)
      }
    )
    }

  }
  viewProject(projectID){
    this.project_ID = projectID
    this.marked = false
  }
 
  back(){
    this.marked = true
  }
}
