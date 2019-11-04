import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service';
import { ProjectDetails, AuthProjectService } from '../../project/auth-project.service'
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private authHome: AuthHomeService, private router: Router,
    private authPro: AuthProjectService, private activateRoute: ActivatedRoute) { }

  marked = true
  no
  load

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.no = params['xx'];
    })
    console.log("type:" + this.no)

    if ('1' == this.no) {
      this.authHome.webProject().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('2' == this.no) {
      this.authHome.mobProject().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('3' == this.no) {
      this.authHome.dataProject().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('4' == this.no) {
      this.authHome.softProject().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('5' == this.no) {
      this.authHome.blockchain().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('6' == this.no) {

      this.authHome.machlearn().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('7' == this.no) {
      this.authHome.natlang().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('8' == this.no) {
      this.authHome.digimark().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('9' == this.no) {
      this.authHome.multiDesign().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    } else if ('10' == this.no) {
      this.authHome.robot().subscribe(
        project => {
          this.load = project
        },
        err => {
          console.error(err)
        }
      )
    }

  }


  project_ID: number

  viewProject(projectID) {
    this.project_ID = projectID
    console.log(this.project_ID)
    this.marked = false

  }
}
