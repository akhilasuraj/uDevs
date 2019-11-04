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
  webDeveloper: any;
  mobDeveloper: any;
  dataDeveloper: any;
  softDeveloper: any;
  blockDeveloper: any;
  machineDeveloper: any;
  langDeveloper: any;
  digiMarkDeveloper: any;
  multiDeveloper: any;
  robotDeveloper: any;

  constructor(
    private authHome: AuthHomeService,
    private router: Router,
  ) { }

  

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
 NO:0
  ngOnInit() {

    this.authHome.webDeveloper().subscribe(
      user=>{
           this.webDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.mobDeveloper().subscribe(
      user=>{
           this.mobDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.dataDeveloper().subscribe(
      user=>{
           this.dataDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.softDeveloper().subscribe(
      user=>{
           this.softDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.blockDeveloper().subscribe(
      user=>{
           this.blockDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.machineDeveloper().subscribe(
      user=>{
           this.machineDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.langDeveloper().subscribe(
      user=>{
           this.langDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.digiMarkDeveloper().subscribe(
      user=>{
           this.digiMarkDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.multiDeveloper().subscribe(
      user=>{
           this.multiDeveloper= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.robotDeveloper().subscribe(
      user=>{
           this.robotDeveloper= user
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
  viewMore(no){
    this.NO=no;
    
    this.router.navigate(['/cliCatagory/all'],{queryParams:{xx:this.NO}})
    console.log("xx"+this.NO)
   }

}
