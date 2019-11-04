import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service'
import {  skillDetails } from '../../user/authentication.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cli-all',
  templateUrl: './cli-all.component.html',
  styleUrls: ['./cli-all.component.css']
})
export class CliAllComponent implements OnInit {
     
  load
  no
  marked = true
  constructor(
    private authHome: AuthHomeService,
    private router: Router,private activateRoute:ActivatedRoute
  ) { }
  userID
  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params =>{
      this.no=params['xx'];
    })
    console.log("type:"+this.no)
    if(1==this.no){
    this.authHome.webDeveloper().subscribe(
      user=>{
           this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(2==this.no){
    this.authHome.mobDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}
    
    else if(3==this.no){
    this.authHome.dataDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(4==this.no){
    this.authHome.softDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(5==this.no){
    this.authHome.blockDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(6==this.no){
    this.authHome.machineDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(7==this.no){
    this.authHome.langDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(8==this.no){
    this.authHome.digiMarkDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(9==this.no){
    this.authHome.multiDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    else if(10==this.no){
    this.authHome.robotDeveloper().subscribe(
      user=>{
        this.load= user
      },
      err => {
        console.error(err)
      }
    )}

    
  }


  viewDeveloper(user_ID){
     this.userID = user_ID
      this.marked = false
  }
  back(){
    this.marked = true
  }

  }


