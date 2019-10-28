import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  constructor(private log : LoginComponent) { }

  ngOnInit() {
  }


  devReg(){
    this.log.marked1 = true
    this.log.marked3 = false
  }

  cliReg(){
    this.log.marked2 = true
    this.log.marked3 = false
  }

}
