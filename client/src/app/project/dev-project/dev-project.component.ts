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
      }
    )

    this.authPro.bid_cur_pro().subscribe(
      project =>{
        this.bidCurPro = project
      }
    )


    this.authPro.rec_cur_pro().subscribe(
      project =>{
        this.recCurPro = project
      }
    )

    this.authPro.fix_con_pro().subscribe(
      project =>{
        this.fixConPro = project
      }
    )

    this.authPro.bid_con_pro().subscribe(
      project =>{
        this.bidConPro = project
      }
    )


    this.authPro.rec_con_pro().subscribe(
      project =>{
        this.recConPro = project
      }
    )


  this.authPro.fix_com_pro().subscribe(
    project =>{
      this.fixComPro = project
    }
  )

  this.authPro.bid_com_pro().subscribe(
    project =>{
      this.bidComPro = project
    }
  )


  this.authPro.rec_com_pro().subscribe(
    project =>{
      this.recComPro = project
    }
  )

}

fixID
bidID
recID
type


onClickfix(reqid){
  this.fixID = reqid
  this.type = 1
  this.marked = false
}

onClickbid(reqid){
  this.bidID = reqid
  this.type = 2
  this.marked = false
}

onClickrec(reqid){
  this.recID  = reqid
  this.type = 3
  this.marked = false
}

}
