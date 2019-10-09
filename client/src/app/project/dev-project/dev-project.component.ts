import { Component, OnInit } from '@angular/core';
import { AuthProjectService } from '../auth-project.service';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-project',
  templateUrl: './dev-project.component.html',
  styleUrls: ['./dev-project.component.css']
})
export class DevProjectComponent implements OnInit {
  fixCurPro: any;
  bidCurPro: any;
  recCurPro: any;
  fixConPro: any;
  bidConPro: any;
  recConPro: any;
  recComPro: any;
  bidComPro: any;
  fixComPro: any;

  marked = true

  constructor(
    private authPro: AuthProjectService,
    private router: Router,
    private auth: AuthenticationService,
  ) { }

  

  ngOnInit() {

    this.authPro.fix_cur_pro().subscribe(
      project =>{
        this.fixCurPro = project
        console.log(project)
      }
    )

    this.authPro.bid_cur_pro().subscribe(
      project =>{
        this.bidCurPro = project
        console.log(project)
      }
    )


    this.authPro.rec_cur_pro().subscribe(
      project =>{
        this.recCurPro = project
        console.log(project)
      }
    )

    this.authPro.fix_con_pro().subscribe(
      project =>{
        this.fixConPro = project
        console.log(project)
      }
    )

    this.authPro.bid_con_pro().subscribe(
      project =>{
        this.bidConPro = project
        console.log(project)
      }
    )


    this.authPro.rec_con_pro().subscribe(
      project =>{
        this.recConPro = project
        console.log(project)
      }
    )


  this.authPro.fix_com_pro().subscribe(
    project =>{
      this.fixComPro = project
      console.log(project)
    }
  )

  this.authPro.bid_com_pro().subscribe(
    project =>{
      this.bidComPro = project
      console.log(project)
    }
  )


  this.authPro.rec_com_pro().subscribe(
    project =>{
      this.recComPro = project
      console.log(project)
    }
  )

}



onClockfix(reqid){
  
}

onClockbid(reqid){
  
}

onClockrec(reqid){
  
}

}
