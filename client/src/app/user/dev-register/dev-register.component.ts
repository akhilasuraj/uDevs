import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-register',
  templateUrl: './dev-register.component.html',
  styleUrls: ['./dev-register.component.css']
})
export class DevRegisterComponent implements OnInit {
  marked = true

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    user_type:'Developer',
    email: '',
    password: '',
    gender: '',
    contact_no:'',
    profile_img: '',
    isActivated: true
  };

  confirm_password:string = ''

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(){}
  

  register() {
          this.auth.dev_register(this.credentials).subscribe(
            () => {
              this.marked = false
              this.auth.sendEmail(this.credentials).subscribe(
                msg =>{
                  console.log(msg)
                }
              )  
            },
            err => {
              console.error(err);
            }
          )
  }


  checkMatch(){
    if(this.credentials.password!=this.confirm_password){
      return true;
    }else{
      return false;
    }
  }

}
