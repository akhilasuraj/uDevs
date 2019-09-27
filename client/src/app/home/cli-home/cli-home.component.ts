import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service'
import {  skillDetails } from '../../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-home',
  templateUrl: './cli-home.component.html',
  styleUrls: ['./cli-home.component.css']
})

export class CliHomeComponent implements OnInit {

  constructor(
    private authHome: AuthHomeService,
    private router: Router,
  ) { }

  webDeveloper: skillDetails
  designer: skillDetails
  writer: skillDetails
  dataEnter: skillDetails

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

  userID

  ngOnInit() {

    this.authHome.webDeveloper().subscribe(
      user=>{
        console.log(user)
           this.webDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.designDeveloper().subscribe(
      user=>{
          this.designer= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.writingDeveloper().subscribe(
      user=>{
          this.writer= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.dataDeveloper().subscribe(
      user=>{
          this.dataEnter= user
      },
      err => {
        console.error(err)
      }
    )
  }


  viewDeveloper(user_ID){
     this.userID = user_ID
      this.marked = false
  }

}
